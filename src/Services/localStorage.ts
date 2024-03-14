import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners';

// Function to add an ID to the list
export const addIdToList = async (id: number) => {
  try {
    // Retrieve existing IDs from AsyncStorage
    const existingIds = await AsyncStorage.getItem('idList');

    let updatedIds: number[] = [];

    if (existingIds) {
      // Parse the existing IDs if they exist
      updatedIds = JSON.parse(existingIds);
    }

    // Add the new ID to the list
    updatedIds.push(id);

    // Save the updated list back to AsyncStorage
    await AsyncStorage.setItem('idList', JSON.stringify(updatedIds));
  } catch (error) {
    console.error('Error adding ID to list:', error);
  }
  listChanged()
};

// Function to retrieve the list of IDs
export const getIdList = async (): Promise<number[]> => {
  try {
    // Retrieve the list of IDs from AsyncStorage
    const idList = await AsyncStorage.getItem('idList');

    if (idList) {
      // Parse and return the list of IDs if it exists
      return JSON.parse(idList);
    } else {
      // Return an empty array if the list doesn't exist yet
      return [];
    }
  } catch (error) {
    console.error('Error retrieving ID list:', error);
    return [];
  }
};

// Function to remove an ID from the list
export const removeIdFromList = async (id: number) => {
  try {
    // Retrieve existing IDs from AsyncStorage
    const existingIds = await AsyncStorage.getItem('idList');

    let updatedIds: number[] = [];

    if (existingIds) {
      // Parse the existing IDs if they exist
      updatedIds = JSON.parse(existingIds);

      // Remove the ID from the list
      updatedIds = updatedIds.filter(existingId => existingId !== id);

      // Save the updated list back to AsyncStorage
      await AsyncStorage.setItem('idList', JSON.stringify(updatedIds));
    }
  } catch (error) {
    console.error('Error removing ID from list:', error);
  }
  listChanged()
};

// Function to check if an ID exists in the list
export const checkIfIdExists = async (id: number): Promise<boolean> => {
  try {
    // Retrieve the list of IDs from AsyncStorage
    const idList = await AsyncStorage.getItem('idList');

    if (idList) {
      // Parse the existing IDs if they exist
      const existingIds: number[] = JSON.parse(idList);

      // Check if the ID exists in the list
      return existingIds.includes(id);
    } else {
      // If the list doesn't exist yet, return false
      return false;
    }
  } catch (error) {
    console.error('Error checking if ID exists:', error);
    return false;
  }
};

export const listChanged = () => {
  EventRegister.emit('favouriteChanged', 'List Changed');
  EventRegister.emit('pokedexChanged', 'List Changed');
}