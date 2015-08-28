package de.itpuzzles.myclub.api.logic.club;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.club.MyClub;
import de.itpuzzles.myclub.domainmodel.club.MyClubInfo;
import de.itpuzzles.myclub.domainmodel.helper.ImageTransfer;

import javax.ejb.Stateless;
import javax.imageio.ImageIO;
import javax.inject.Inject;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
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

    public void saveClubEmblem(ImageTransfer imageTransfer) {

        List<MyClub> clubs = dataAccessManager.getAllEntities(MyClub.class);
        if (clubs == null || clubs.size() != 1)
            return;

        MyClub club = clubs.get(0);
        club.setEmblem(this.cutImage(imageTransfer));
        dataAccessManager.update(club);
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

    private byte[] cutImage(ImageTransfer imageTransfer) {

        byte[] result = null;

        try {
            InputStream in = new ByteArrayInputStream(imageTransfer.getImage());
            BufferedImage bImageFromConvert = ImageIO.read(in);
            in.close();

            Image scaledImage = bImageFromConvert.getScaledInstance
                    (imageTransfer.getClientWidth(), imageTransfer.getClientHeight(), Image.SCALE_AREA_AVERAGING);

            BufferedImage bufferedThumbnail = new BufferedImage
                    (imageTransfer.getCutWidth(), imageTransfer.getCutHeight(), BufferedImage.TYPE_INT_ARGB);

            bufferedThumbnail.getGraphics().drawImage(scaledImage, 0, 0,
                    imageTransfer.getCutWidth(), imageTransfer.getCutHeight(),
                    imageTransfer.getCutLeft(), imageTransfer.getCutTop(),
                    imageTransfer.getCutWidth() + imageTransfer.getCutLeft(),
                    imageTransfer.getCutTop() + imageTransfer.getCutHeight(), null);

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(bufferedThumbnail, "png", baos);
            baos.flush();
            result = baos.toByteArray();
            baos.close();
        }
        catch(Exception ex) {
            return result;
        }

        return result;
    }

    //endregion
}
