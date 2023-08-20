
package claseapoyo.repositorio;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Dao <T,L> {
    
    protected EntityManagerFactory emf = Persistence.createEntityManagerFactory("ClaseApoyoPU");
    protected EntityManager em = emf.createEntityManager();
    
    protected void conect(){
        if (!em.isOpen()) {
            em = emf.createEntityManager();
        }
    }
    
    protected void disconect(){
        if (em.isOpen()) {
            em.close();
        }
    }
    
    //CRUD
    
    public void create(T t){
        conect();
        em.getTransaction().begin();
        em.persist(t);
        em.getTransaction().commit();
        disconect();
    }
    
    public void update(T t){
        conect();
        em.getTransaction().begin();
        em.merge(t);
        em.getTransaction().commit();
        disconect();
    }
    
    public void delete(T t){
        conect();
        em.getTransaction().begin();
        em.remove(t);
        em.getTransaction().commit();
        disconect();
    }
    
    public T findById(L id){
        conect();
        T t = (T)em.createNativeQuery("SELECT * FROM usuarios WHERE id =" + id).getSingleResult();
        disconect();
        return t;
    }
    
    public List<T> findAll(T t){
        conect();
        List<T> list = em.createQuery("SELECT u FROM " + t.getClass() + "u").getResultList();
        disconect();
    }
}
