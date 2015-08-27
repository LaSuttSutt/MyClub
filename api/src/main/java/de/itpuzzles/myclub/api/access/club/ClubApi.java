package de.itpuzzles.myclub.api.access.club;

import de.itpuzzles.myclub.api.authentication.HasRole;
import de.itpuzzles.myclub.api.logic.club.ClubLogic;
import de.itpuzzles.myclub.domainmodel.club.MyClubInfo;
import de.itpuzzles.myclub.domainmodel.helper.ImageTransfer;
import de.itpuzzles.myclub.domainmodel.users.User;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

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

    @POST
    @Path("/")
    @HasRole(User.UserRole.ClubManagement)
    public void saveClubInfo(MyClubInfo info) {

        clubLogic.saveClubInfo(info);
    }

    @GET
    @Path("/getEmblem")
    @Produces("image/png")
    public byte[] getEmblem() {

        return clubLogic.getClubEmblem();
    }

    @POST
    @Path("/saveEmblem")
    @HasRole(User.UserRole.ClubManagement)
    public void saveEmblem(ImageTransfer imageTransfer) {


    }

    //endregion
}
