package claseapoyo.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "usuarios")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45,unique = true,nullable = false,name = "usuario")
    private String username;
    
    @Column(length = 45,nullable = false,name = "contraseña")
    private String password;
    
    @Column(length = 45,unique = true,nullable = false,name = "email")
    private String mail;
    
    @Column(nullable = false,name = "nivel")
    private Integer level;

}
