class SwapiService {
  _apibase = "https://swapi.co/api";

  async getResouce(url) {
    const res = await fetch(`${this._apibase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResouce(`/people/`);
    return res.results;
  }
  getPerson(id) {
    return this.getResouce(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResouce(`/planets/`);
    return res.results;
  }
  getPlanet(id) {
    return this.getResouce(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResouce(`/starships/`);
    return res.results;
  }
  getStarship(id) {
    return this.getResouce(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getAllStarships().then(people => {
  console.log(people);
});
