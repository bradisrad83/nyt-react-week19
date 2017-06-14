//requiring react libarary
var React = require('react');

const Query = React.createClass({

  getInitialState() {
    return {
      search: "",
      start: "",
      end: "",
    }
  },


    handleChange(event) {

      const newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },


  handleSubmit() {

    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
    return false;
  },


  render() {

    return(
      <div className ="main-container">

          <div className="row">
            <div className="col-lg-12">

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title"><i className="fa fa-newspaper" aria-hidden="true"></i>Article Search</h1>
                </div>
                <div className="panel-body">

                  <form>
                    <div className="form-group">
                      <h4 className="">Topic</h4>
                      <input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

                      <h4 className="">Start Year (Required)</h4>
                      <input value={this.state.value} className="form-control " id="startDate" onChange= {this.handleChange} required/>

                      <h4 className="">End Year (Required)</h4>
                      <input value={this.state.value} className="form-control " id="endDate" onChange= {this.handleChange} required/>

                    </div>

                    <div className="pull-right">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><h4>Submit</h4></button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>

      </div>

    )
  }

});

export default Query;
