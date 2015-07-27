package de.itpuzzles.myclub.domainmodel.authentication;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.UUID;

@Entity
@Table
public class Token {

//region #Declarations

    @Id
    private String id;

    private String fkUserId;
    private Date created;

    //endregion

    //region #Constructors

    public Token() {
        this.id = UUID.randomUUID().toString();
        this.setCreated(new Date());
    }

    public Token(UUID userId) {
        this.id = UUID.randomUUID().toString();
        this.setCreated(new Date());
        this.setFkUserId(userId);
    }

    //endregion

    //region #Getter/Setter

    public UUID getId() { return UUID.fromString(this.id); }
    public void setId(UUID id) { this.id = id.toString(); }

    public UUID getFkUserId() {
        if (this.fkUserId == null)
            return null;

        return UUID.fromString(this.fkUserId);
    }
    public void setFkUserId(UUID userId) {
        if (userId != null)
            this.fkUserId = userId.toString();
    }

    public Date getCreated() {
        return created;
    }
    public void setCreated(Date created) {
        this.created = created;
    }

    //endregion
}
