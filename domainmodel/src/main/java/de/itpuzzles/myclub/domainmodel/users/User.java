package de.itpuzzles.myclub.domainmodel.users;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;
import java.util.UUID;

@Entity
@Table
public class User {

    //region #Declarations

    @Id
    private String id;

    private String name;
    private String shortName;
    private String email;
    private String password;

    @javax.persistence.Transient
    private List<String> roles;

    //endregion

    //region #Constructors

    public User() { this.setId(UUID.randomUUID()); }

    public User(String name, String shortName, String email, String passwordHash, List<String> roles) {

        this.setId(UUID.randomUUID());
        this.setName(name);
        this.setShortName(shortName);
        this.setEmail(email);
        this.setPassword(passwordHash);
        this.setRoles(roles);
    }

    //endregion

    //region #Getter/Setter

    public UUID getId() {
        return UUID.fromString(id);
    }
    public void setId(UUID id) {
        this.id = id.toString();
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return shortName;
    }
    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public List<String> getRoles() {
        return roles;
    }
    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    //endregion

    //region #Enumerations

    public enum UserRole {
        ADMIN(0, "Administrator"),
        ClubManagement(1, "Verwaltung"),
        Coach(2, "Trainer"),
        Player(3, "Spieler");

        private final int userRole;
        private final String name;

        UserRole(int role, String name)
        {
            this.userRole = role;
            this.name = name;
        }

        public int getValue() { return this.userRole; }
        public String getName() { return this.name; }
    }

    //endregion
}
