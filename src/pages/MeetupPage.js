import React from "react";

class MeetupPage extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://api.meetup.com/Learn-Teach-Code-Seoul/events")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    console.log(this.state.data)
    const events = this.state.data.map(event => <div key={event.id}>{event.duration}</div>);

    return <div>{events}</div>;
  }
}

export default MeetupPage;
