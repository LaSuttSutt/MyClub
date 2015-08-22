package de.itpuzzles.myclub.api.dataaccess;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Stateless
public class DataAccessManager implements IDataAccessManager {

    //region #Declarations

    @PersistenceContext(unitName = "MYCLUB")
    private EntityManager entityManager;

    //endregion

    //region #Public Methods

    public EntityManager getEntityManager() {
        return entityManager;
    }

    @TransactionAttribute
    public <T> void store(T objectToStore) {

        entityManager.persist(objectToStore);
    }

    @TransactionAttribute
    public <T> void delete(T objectToDelete) {

        entityManager.remove(objectToDelete);
    }

    @TransactionAttribute
    public <T> void update(T objectToUpdate) {

        entityManager.merge(objectToUpdate);
    }

    @TransactionAttribute
    public <T> void deleteEntityById(Class<T> typeClass, UUID id) {

        T entity = entityManager.getReference(typeClass, id.toString());
        entityManager.remove(entity);
    }

    @TransactionAttribute
    public void deleteEntites(String givenQuery, Map<String, String> queryParameters) {

        Query query = entityManager.createQuery(givenQuery);
        queryParameters.forEach(query::setParameter);

        query.executeUpdate();
    }

    @TransactionAttribute
    public <T> void deleteAllEntities(Class<T> typeClass) {

        Query query = entityManager.createQuery("DELETE FROM " + typeClass.getSimpleName());
        query.executeUpdate();
    }

    public <T> T getEntityById(Class<T> typeClass, UUID id) {

        return entityManager.find(typeClass, id.toString());
    }

    public <T> List<T> getAllEntities(Class<T> typeClass) {

        TypedQuery<T> query = entityManager.createQuery
                ("SELECT p FROM " + typeClass.getSimpleName() + " p", typeClass);
        return query.getResultList();
    }

    public <T> List<T> getEntities(Class<T> typeClass, String givenQuery, Map<String, String> queryParameters) {

        TypedQuery<T> query = entityManager.createQuery(givenQuery, typeClass);
        queryParameters.forEach(query::setParameter);

        return query.getResultList();
    }

    //endregion
}
