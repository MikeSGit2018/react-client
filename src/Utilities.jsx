import axios from 'axios';

export function getWeather() {
    // const theURL = "http://127.0.0.1:3009";
    // axios({
    //     method: "get",
    //     url: theURL,
    // }).then((response) => {
    //     console.log("response:",response);

    // }).catch((error) => {

    // });

    // axios.get('')
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });

    axios({
        method: 'get',
        url: 'localhost:3009',
        // headers: {"Access-Control-Allow-Origin": "*"}
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    // return "got here";
    
}