//Activity 1: Understanding LocalStorage 
//chatgpr generated code
//Task 1: Write a script to save a string value to localStorage and retrivev it. Log the retrieved value.

// Save a string value to localStorage
const key = 'myStringKey';
const value = 'Hello, localStorage!';
localStorage.setItem(key, value);

// Retrieve the string value from localStorage
const retrievedValue = localStorage.getItem(key);

// Log the retrieved value to the console
console.log('Retrieved value:', retrievedValue);

//Task 2:Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Define an object
const myObject = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

// Convert the object to a JSON string and save it to localStorage
localStorage.setItem('myObjectKey', JSON.stringify(myObject));

// Retrieve the JSON string from localStorage
const jsonString = localStorage.getItem('myObjectKey');

// Parse the JSON string back to an object
const retrievedObject = JSON.parse(jsonString);

// Log the retrieved object to the console
console.log('Retrieved object:', retrievedObject);

//Activity 2: Using LocalStorage
//Task 3:Creating a simple form that saves user input (e.g., name and email) to LocalStorage when submitted Retrieve and display the saved data on page load.
   
        // Function to save form data to localStorage
        function saveToLocalStorage(name, email) {
            const userData = { name, email };
            localStorage.setItem('userData', JSON.stringify(userData));
        }

        // Function to retrieve and display data from localStorage
        function displayUserData() {
            const savedData = localStorage.getItem('userData');
            if (savedData) {
                const userData = JSON.parse(savedData);
                document.getElementById('displayName').textContent = `Name: ${userData.name}`;
                document.getElementById('displayEmail').textContent = `Email: ${userData.email}`;
            }
        }

        // Handle form submission
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            saveToLocalStorage(name, email);
            displayUserData(); // Update displayed data
        });

        // Display saved user data on page load
        window.onload = displayUserData;
  

//Task 4: write a script to remove an item from Localstorage log the localstorage content before and after removal.

 // Function to log all localStorage content
 function logLocalStorage() {
  console.log('Current localStorage content:');
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key}: ${value}`);
  }
}

// Set up some example data in localStorage
localStorage.setItem('item1', 'value1');
localStorage.setItem('item2', 'value2');
localStorage.setItem('item3', 'value3');

// Log localStorage content before removal
console.log('Before removal:');
logLocalStorage();

// Set up the button click event to remove an item
document.getElementById('removeItem').addEventListener('click', function() {
  // Specify the key of the item to remove
  const keyToRemove = 'item2';

  // Remove the item from localStorage
  localStorage.removeItem(keyToRemove);

  // Log localStorage content after removal
  console.log('After removal:');
  logLocalStorage();
});

//Activity 3: Understanding SessionStorage
//Task 5: Write a script to save a string value to SessionStorage and retrieve it log the retrieved value.

// Function to save a string value to sessionStorage
function saveToSessionStorage() {
    const key = 'mySessionKey';
    const value = 'Hello, sessionStorage!';
    sessionStorage.setItem(key, value);
    console.log(`Saved to sessionStorage: ${value}`);
}

// Function to retrieve a string value from sessionStorage
function retrieveFromSessionStorage() {
    const key = 'mySessionKey';
    const retrievedValue = sessionStorage.getItem(key);
    console.log('Retrieved value from sessionStorage:', retrievedValue);
}

// Event listeners for buttons
document.getElementById('saveValue').addEventListener('click', saveToSessionStorage);
document.getElementById('retrieveValue').addEventListener('click', retrieveFromSessionStorage);



//Task 6: Write a script to save an object to sessionstorage by converting it to a json string. Retrieve and parse the object, then log it.

 // Function to save an object to sessionStorage
 function saveObjectToSessionStorage() {
  const myObject = {
      name: 'Alice',
      age: 30,
      city: 'Wonderland'
  };
  // Convert the object to a JSON string and save it
  sessionStorage.setItem('myObjectKey', JSON.stringify(myObject));
  console.log('Object saved to sessionStorage');
}

// Function to retrieve and parse an object from sessionStorage
function retrieveObjectFromSessionStorage() {
  const jsonString = sessionStorage.getItem('myObjectKey');
  if (jsonString) {
      // Parse the JSON string back to an object
      const myObject = JSON.parse(jsonString);
      console.log('Retrieved object from sessionStorage:', myObject);
  } else {
      console.log('No object found in sessionStorage');
  }
}

// Event listeners for buttons
document.getElementById('saveObject').addEventListener('click', saveObjectToSessionStorage);
document.getElementById('retrieveObject').addEventListener('click', retrieveObjectFromSessionStorage);

//Activity 4: Using SessionStorage
//Task 7: Create a simple from that saves user input (e.g., name and email) to sessionstorage when dsubmitted. Retrieve and display the saved data on page load.

 // Function to save form data to sessionStorage
 function saveToSessionStorage(name, email) {
  const userData = { name, email };
  sessionStorage.setItem('userData', JSON.stringify(userData));
}

// Function to retrieve and display data from sessionStorage
function displayUserData() {
  const savedData = sessionStorage.getItem('userData');
  if (savedData) {
      const userData = JSON.parse(savedData);
      document.getElementById('displayName').textContent = `Name: ${userData.name}`;
      document.getElementById('displayEmail').textContent = `Email: ${userData.email}`;
  } else {
      document.getElementById('displayName').textContent = 'No data saved';
      document.getElementById('displayEmail').textContent = '';
  }
}

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  saveToSessionStorage(name, email);
  displayUserData(); // Update displayed data
});

// Display saved user data on page load
window.onload = displayUserData;


//Task 8: Write a script to remove an item from sessionstorage. Log the sessionStorage content before and after removal.


        // Function to log all sessionStorage content
        function logSessionStorage() {
            console.log('Current sessionStorage content:');
            if (sessionStorage.length === 0) {
                console.log('sessionStorage is empty.');
            } else {
                for (let i = 0; i < sessionStorage.length; i++) {
                    const key = sessionStorage.key(i);
                    const value = sessionStorage.getItem(key);
                    console.log(`${key}: ${value}`);
                }
            }
        }

        // Set up some example data in sessionStorage
        sessionStorage.setItem('item1', 'value1');
        sessionStorage.setItem('item2', 'value2');
        sessionStorage.setItem('item3', 'value3');

        // Log sessionStorage content before removal
        console.log('Before removal:');
        logSessionStorage();

        // Set up the button click event to remove an item
        document.getElementById('removeItems').addEventListener('click', function() {
            // Specify the key of the item to remove
            const keyToRemove = 'item2';

            // Remove the item from sessionStorage
            sessionStorage.removeItems(keyToRemove);

            // Log sessionStorage content after removal
            console.log('After removal:');
            logSessionStorage();
        });

//Activity 5: Comparing LocalStorage and SessionStorage
//Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionstorage. Retrieve and log the values from both storage mechanisms.

    // Function to save a value to both localStorage and sessionStorage
    function saveToBothStorages(key, value) {
        // Save value to localStorage
        localStorage.setItem(key, value);
        console.log(`Saved to localStorage: ${key} = ${value}`);

        // Save value to sessionStorage
        sessionStorage.setItem(key, value);
        console.log(`Saved to sessionStorage: ${key} = ${value}`);

        // Retrieve and log values from both storages
        const localStorageValue = localStorage.getItem(key);
        const sessionStorageValue = sessionStorage.getItem(key);
        
        console.log(`Retrieved from localStorage: ${key} = ${localStorageValue}`);
        console.log(`Retrieved from sessionStorage: ${key} = ${sessionStorageValue}`);
    }

    // Example usage: store and retrieve data when the button is clicked
    document.getElementById('storeAndRetrieve').addEventListener('click', function() {
        // Example key and value
        const key = 'exampleKey';
        const value = 'exampleValue';

        saveToBothStorages(key, value);
    });
//Task 10: Write a function that clears all data from both LOcalStorage and sessionstorage. Verify that both storages are empty.

    // Function to clear all data from both localStorage and sessionStorage
    function clearAllStorages() {
        // Clear localStorage
        localStorage.clear();
        console.log('localStorage has been cleared.');

        // Clear sessionStorage
        sessionStorage.clear();
        console.log('sessionStorage has been cleared.');
    }

    // Function to verify and log that both storages are empty
    function verifyStorages() {
        // Check and log localStorage content
        console.log('Checking localStorage:');
        if (localStorage.length === 0) {
            console.log('localStorage is empty.');
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                console.log(`${key}: ${value}`);
            }
        }

        // Check and log sessionStorage content
        console.log('Checking sessionStorage:');
        if (sessionStorage.length === 0) {
            console.log('sessionStorage is empty.');
        } else {
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                const value = sessionStorage.getItem(key);
                console.log(`${key}: ${value}`);
            }
        }
    }

    // Event listener for clearing storages
    document.getElementById('clearStorages').addEventListener('click', function() {
        clearAllStorages();
    });

    // Event listener for verifying storages
    document.getElementById('verifyStorages').addEventListener('click', function() {
        verifyStorages();
    });
