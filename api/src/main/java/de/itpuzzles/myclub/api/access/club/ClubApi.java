package de.itpuzzles.myclub.api.access.club;

import de.itpuzzles.myclub.api.logic.club.ClubLogic;
import de.itpuzzles.myclub.domainmodel.club.MyClubInfo;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;

@Path("/club")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ClubApi {

    //region #Declarations

    @Inject
    private ClubLogic clubLogic;

    //endregion

    //region #API-Methods

    @GET
    @Path("/")
    public MyClubInfo getClubInfo() {

        return clubLogic.getClubInfo();
    }

    @GET
    @Path("/getEmblem")
    @Produces("image/jpeg")
    public byte[] getEmblem() throws IOException {

        ClassLoader classLoader = getClass().getClassLoader();
        URL url = classLoader.getResource("files/EmblemDefault.png");
        if (url == null)
            return null;

        String loadedFileString = url.getFile();
        if (loadedFileString == null)
            return null;

        File file = new File(loadedFileString);

        byte[] bFile = new byte[(int) file.length()];

        FileInputStream fileInputStream = new FileInputStream(file);
        fileInputStream.read(bFile);
        fileInputStream.close();

        return bFile;
    }

    //endregion
}
