package de.itpuzzles.myclub.domainmodel.club;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table
public class MyClub {

    //region #Declarations

    @Id
    private String id;

    private String clubName;

    @Lob
    private byte[] emblem;

    //endregion

    //region #Constructor

    public MyClub() {
        this.id = UUID.randomUUID().toString();
    }

    //endregion

    //region #Getter/Setter

    public UUID getId() {
        return UUID.fromString(id);
    }
    public void setId(UUID id) {
        this.id = id.toString();
    }

    public String getClubName() {
        return clubName;
    }
    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public byte[] getEmblem() {
        return emblem;
    }
    public void setEmblem(byte[] emblem) {
        this.emblem = emblem;
    }

    //endregion
}
