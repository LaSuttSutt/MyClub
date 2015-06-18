package de.itpuzzles.myclub.api.access;

import org.flywaydb.core.Flyway;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.sql.DataSource;

@Singleton
@Startup
@TransactionManagement(TransactionManagementType.BEAN)
public class MyClubApiStart {

    //region #Declarations

    @Resource(lookup = "java:/jdbc/MYCLUB")
    private DataSource myClubDataSource;

    //endregion

    //region #Private Methods

    @PostConstruct
    private void init() {

        Flyway flyway = new Flyway();
        flyway.setDataSource(myClubDataSource);
        flyway.migrate();
    }

    //endregion
}
