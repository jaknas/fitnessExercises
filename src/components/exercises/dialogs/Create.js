import React, { Component } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  withStyles
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      // TODO: validate

      const { exercise } = this.state;

      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, '-')
      });

      this.setState({
        open: false,
        exercise: {
          title: '',
          description: '',
          muscles: ''
        }
      });
    };

    render() {
      const {
          open,
          exercise: { title, description, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;

      return (
        <React.Fragment>
          <Button variant="fab" onClick={this.handleToggle} mini>
            <AddIcon />
          </Button>
          <Dialog open={this.state.open} onClose={this.handleToggle}>
            <DialogTitle id="form-dialog-title">
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="muscles">Muscles</InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  label="Description"
                  value={description}
                  multiline
                  rows="4"
                  onChange={this.handleChange('description')}
                  margin="normal"
                  className={classes.FormControl}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }
  }
);
