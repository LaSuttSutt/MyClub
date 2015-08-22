package de.itpuzzles.myclub.api.dataaccess;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface IDataAccessManager {

    // Returns the EntityManager instance
    EntityManager getEntityManager();

    // Stores the given object
    <T> void store(T objectToStore);

    // Deletes the given object
    <T> void delete(T objectToDelete);

    // Updates the given object
    <T> void update(T objectToUpdate);

    // Deletes the object with the given id of the given type
    <T> void deleteEntityById(Class<T> typeClass, UUID id);

    // Deletes all stored objects of the given type that matches the given query
    void deleteEntites(String givenQuery, Map<String, String> queryParameters);

    // Deletes all stored objects of the given type
    <T> void deleteAllEntities(Class<T> typeClass);

    // Returns a object of the given type with the given id
    <T> T getEntityById(Class<T> typeClass, UUID id);

    // Returns all stored objects of the given type
    <T> List<T> getAllEntities(Class<T> typeClass);

    // Returns all stored objects of the given type that matches the given query
    <T> List<T> getEntities(Class<T> typeClass, String givenQuery, Map<String, String> queryParameters);
}
