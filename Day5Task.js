class Movie {
    // Properties
    title;
    studio;
    rating;
  
    // Constructor
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    // Method to filter movies with rating "PG"
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  // Example usage
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(casinoRoyale); 
  // Creating an array of Movie instances
  const moviesArray = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    // Add more Movie instances as needed
  ];
  
  // Filtering movies with rating "PG"
  const pgMovies = Movie.getPG(moviesArray);
  console.log(pgMovies);
  //------------------------------------------------------
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  console.log(person1)
//---------------------------------------------------------------
class UberCalculator {
    // Properties
    baseFare;
    costPerMile;
    costPerMinute;
  
    // Constructor
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    // Method to calculate the total fare
    calculateFare(distance, time) {
      const distanceCost = this.costPerKm * distance;
      const timeCost = this.costPerMinute * time;
      const totalFare = this.baseFare + distanceCost + timeCost;
  
      return totalFare;
    }
  }
  
  // Example usage
  const uberXCalculator = new UberCalculator(5.0, 1.5, 0.2);
  const distance = 10; // in miles
  const time = 20; // in minutes
  
  const totalFare = uberXCalculator.calculateFare(distance, time);
  console.log(`UberX Total Fare: $${totalFare.toFixed(2)}`);
  //----------------------------------------------------------------
  