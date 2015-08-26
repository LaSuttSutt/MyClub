package de.itpuzzles.myclub.api.access.club;

import de.itpuzzles.myclub.api.logic.club.ClubLogic;
import de.itpuzzles.myclub.domainmodel.club.MyClubInfo;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
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

    //endregion
}
