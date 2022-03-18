import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class CreateRoom extends Component{
  defaultVotes = 2;
  constructor(props){
    super(props);
    this.state={
      guest_can_pause:true,
      votes_to_skip:this.defaultVotes,
    };
    this.handelRoomButtonPressed = this.handelRoomButtonPressed.bind(this);
    this.handelVotesChange = this.handelVotesChange.bind(this);
    this.handelGuestCanPause = this.handelGuestCanPause.bind(this);
  }
  handelVotesChange(e){
    this.setState({
      votes_to_skip: e.target.value,
    });
  }
  handelGuestCanPause(e){
    this.setState({
      guest_can_pause: e.target.value === 'true' ? true : false,
    });
  }
  handelRoomButtonPressed(){
    const requestOptions={
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        votes_to_skip: this.state.votes_to_skip,
        guest_can_pause: this.state.guest_can_pause
      }),
    };
    fetch('/api/create-room', requestOptions)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
  }
  render(){
    return <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component='h4' varient='h4'>Create a room</Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component='fieldset'>
          <FormHelperText>
            <div align='center'>Guest Control of Playback</div>
          </FormHelperText>
          <RadioGroup row defaultValue = 'true' onChange={this.handelGuestCanPause}>
          <FormControlLabel value='true' control={ <Radio color='primary' />}label='Play/Pause' labelPlacement='bottom' />
          <FormControlLabel value='false' control={ <Radio color='secondary' />} label='No Control' labelPlacement='bottom' />
      </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align='center'>
        <FormControl>
          <TextField
            required={true}
            defaultValue={this.defaultVotes}
            type='number'
            onChange={this.handelVotesChange}
            inputProps={{
              min: 1,
              style: {textAlign:'center'},
            }} />
          <FormHelperText>
            <div align='center'>
              Votes required
            </div>
          </FormHelperText>

        </FormControl>

      </Grid>
      <Grid item xs={12} align='center'>
        <Button color='Primary' varient='contained' onClick={this.handelRoomButtonPressed}>
          Create a Room
        </Button>
      </Grid>
      <Grid item xs={12} align='center'>
        <Button color='secondary' varient='contained' to='/' component={Link}>
          Back
        </Button>
      </Grid>

    </Grid>;
  }
}
