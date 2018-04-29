import React from "react";
import Header from "./Header"

class App extends React.Component {
  state = {
    weather: {},
  }
  componentDidMount() {
    let xhr = new XMLHttpRequest();
    let cities = [];
    cities.push('London');
    cities.push('Paris');
    console.log(cities);
    xhr.open(`GET`, `http://api.apixu.com/v1/current.json?key=6f2e05b3086f4fd2842183125180504&q=Kingston`, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.state.weather = JSON.parse(xhr.responseText);
          this.setState({
            name: this.state.weather.location.name,
            region: this.state.weather.location.region,
            text: this.state.weather.current.condition.text,
            icon: this.state.weather.current.condition.icon,
            degree: this.state.weather.current.temp_c,
         });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }

  render() {
    return (
      <React.Fragment>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="location">
              <h2>
                {this.state.name ? this.state.name : 'loading...'}
              </h2>
              <p>
                {this.state.region ? this.state.region : 'loading...'}
              </p>
            </div>
            <h3>
                {this.state.degree ? this.state.degree : 'loading...'}°C
            </h3>
            <img
              src={this.state.icon ? `https:${this.state.icon}` : 'loading...'}
              alt={this.state.text ? this.state.text : 'loading..'}/>
          </div>
        </section>
      </main>
      </React.Fragment>
    );
  };
};

export default App;
