package de.itpuzzles.myclub.api.logic.club;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.club.MyClub;
import de.itpuzzles.myclub.domainmodel.club.MyClubInfo;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.List;

@Stateless
public class ClubLogic {

    //region #Declarations

    @Inject
    private IDataAccessManager dataAccessManager;

    //endregion

    //region #Public Methods

    public MyClubInfo getClubInfo() {

        List<MyClub> clubs = dataAccessManager.getAllEntities(MyClub.class);
        if (clubs == null || clubs.size() != 1)
            return null;

        return new MyClubInfo(clubs.get(0));
    }

    //endregion
}
