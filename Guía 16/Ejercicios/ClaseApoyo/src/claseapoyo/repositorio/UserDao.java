package claseapoyo.repositorio;

import claseapoyo.entidades.UserEntity;
import java.util.ArrayList;
import java.util.List;

public class UserDao extends Dao<UserEntity, Long> {

    public List<UserEntity> findByUserName(String username) {
        List<UserEntity> lista = new ArrayList();
        conect();
        lista = (List<UserEntity>) em.createNativeQuery("SELECT * FROM usuarios WHERE usuarios = " + username).getResultList();
        disconect();
        return lista;

    }

    public List<UserEntity> findByUserNameAndEmail(String usuario, String email) {
        List<UserEntity> lista = new ArrayList();
        conect();
        lista = (List<UserEntity>) em.createQuery("SELECT u FROM UserEntity WHERE UserName = :user and :email")
                .setParameter("user", usuario)
                .setParameter("email", email)
                .getResultList();
        disconect();
        return lista;

    }
}
