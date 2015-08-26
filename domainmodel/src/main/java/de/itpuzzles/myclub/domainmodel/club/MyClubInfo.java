package de.itpuzzles.myclub.domainmodel.club;

import java.util.UUID;

// Info-Object for MxClub objects
public class MyClubInfo {

    //region #Declarations

    private UUID id;
    private String clubName;

    //endregion

    //region #Constructor

    public MyClubInfo(MyClub club) {

        this.setId(club.getId());
        this.setClubName(club.getClubName());
    }

    //endregion

    //region #Getter/Setter

    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }

    public String getClubName() {
        return clubName;
    }
    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    //endregion
}
