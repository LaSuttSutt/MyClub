package de.itpuzzles.myclub.domainmodel.users;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table
public class UserRoles {

    //region #Declarations

    @Id
    private String id;

    private String fkUserId;
    private User.UserRole role;

    //endregion

    //region #Constructor

    public UserRoles() {
        this.setId(UUID.randomUUID());
    }

    public UserRoles(UUID fkUserId, User.UserRole role) {

        this.setId(UUID.randomUUID());
        this.setFkUserId(fkUserId);
        this.setRole(role);
    }

    //endregion

    //region #Overrides

    @Override
    public String toString() {

        List<String> result = new ArrayList<>();

        result.add("Id: " + this.getId());
        result.add("FkUserId: " + this.getFkUserId());
        result.add("Rolle: " + this.getRole());

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

    public UUID getFkUserId() {
        return UUID.fromString(fkUserId);
    }
    public void setFkUserId(UUID fkUserId) {
        this.fkUserId = fkUserId.toString();
    }

    public User.UserRole getRole() {
        return role;
    }
    public void setRole(User.UserRole role) {
        this.role = role;
    }

    //endregion
}
