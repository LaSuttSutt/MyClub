package de.itpuzzles.myclub.api.access;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/common")
public class CommonApi {

    //region #API-Methods

    @GET
    @Path("/{value}")
    public String checkApi(@PathParam("value") String value) {

        return "Your param was: " + value;
    }

    //endregion
}
