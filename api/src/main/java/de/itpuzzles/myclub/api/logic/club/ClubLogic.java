package de.itpuzzles.myclub.api.logic.club;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.club.MyClub;
import de.itpuzzles.myclub.domainmodel.club.MyClubInfo;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.io.File;
import java.io.FileInputStream;
import java.net.URL;
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

    public void saveClubInfo(MyClubInfo info) {

        MyClub club = dataAccessManager.getEntityById(MyClub.class, info.getId());
        if (club == null)
            return;

        info.wrapData(club);
        dataAccessManager.update(club);
    }

    public byte[] getClubEmblem() {

        List<MyClub> clubs = dataAccessManager.getAllEntities(MyClub.class);
        if (clubs == null || clubs.size() != 1)
            return null;

        byte[] emblem = clubs.get(0).getEmblem();
        if (emblem == null)
            return this.getDefaultEmblem();

        return emblem;
    }

    //endregion

    //region #Private Methods

    private byte[] getDefaultEmblem() {

        ClassLoader classLoader = getClass().getClassLoader();
        URL url = classLoader.getResource("files/EmblemDefault.png");
        if (url == null)
            return null;

        String loadedFileString = url.getFile();
        if (loadedFileString == null)
            return null;

        return this.convertFileToByteArray(new File(loadedFileString));
    }

    private byte[] convertFileToByteArray(File file) {

        byte[] result = new byte[(int) file.length()];

        try {

            FileInputStream fileInputStream = new FileInputStream(file);
            fileInputStream.read(result);
            fileInputStream.close();

            return result;
        }
        catch (Exception ex) {

            return null;
        }
    }

    //endregion
}
