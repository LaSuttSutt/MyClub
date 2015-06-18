package de.itpuzzles.myclub.domainmodel.users;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.beans.Transient;
import java.util.ArrayList;
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
    private List<UserRole> roles;

    //endregion

    //region #Constructors

    public User() { this.setId(UUID.randomUUID()); }

    public User(String name, String shortName, String email, String passwordHash, List<UserRole> roles) {

        this.setId(UUID.randomUUID());
        this.setName(name);
        this.setShortName(shortName);
        this.setEmail(email);
        this.setPassword(passwordHash);
        this.setRoles(roles);
    }

    //endregion

    //region #Overrides

    @Override
    public String toString() {

        List<String> result = new ArrayList<String>();

        result.add("ID: " + this.getId());
        result.add("Name: " + this.getName());
        result.add("Kurzname: " + this.getShortName());
        result.add("Email: " + this.getEmail());
        result.add("PWD-Hash: " + this.getPassword());

        List<String> roles = new ArrayList<String>();
        for (UserRole role : this.getRoles()) {
            roles.add("[" + role.getValue() + "]" + role.name());
        }
        result.add("Rollen: (" + String.join(",", roles) + ")");

        return String.join("|", result);
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

    public List<UserRole> getRoles() {
        return roles;
    }
    public void setRoles(List<UserRole> roles) {
        this.roles = roles;
    }

    //endregion

    //region #Enumerations

    public enum UserRole {
        ADMIN(0),
        ClubManagement(1),
        Coach(2),
        Player(3);

        private final int userRole;
        UserRole(int role) { this.userRole = role; }
        public int getValue() { return this.userRole; }
    }

    //endregion
}
