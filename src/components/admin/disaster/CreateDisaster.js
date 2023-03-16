import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateDisaster = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [disaster, setDisaster] = useState({
    "Dis No": '',
            Year: '',
            // seq: "",
            // glide: "",
            dis_group: '',
            // dis_subgroup: "",
            "Disaster Type":'',
            // dis_subtype: "",
            // dis_subsubtype: "",
            Country: '',
            // iso: "",
            // region: "",
            // continent: "",
            // location: "",
            // associated_dis1: "",
            // dis_mag_scale: "",
            start_year: '',
            start_month: '',
            // start_day: "",
            end_year: '',
            end_month: '',
            // end_day: "",
            // no_affected: "",
            // total_affected: "",
            // cpi: "",
            // adm_level: "",
            // adm_code: "",
            // geo_location: "",
            // total_deaths: "",
            // adm_code2: "",
            // no_injured: "",
            // dis_mag_val: "",
            // origin: "",
            // event_name: "",
            // total_damages: "",
            // total_damages_adj: "",
            // no_homeless: "",
            // lat: "",
            // lon: "",
            // river_basin: "",
            // declaration: "",
            // associated_dis2: "",
            // associated_dis3: "",
            // insured_damages: "",
            // insured_damages_adj: "",
  });

  const onChange = (e) => {
    setDisaster({ ...disaster, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/disasters', disaster)
      .then((res) => {
        setDisaster({
            "Dis No": '',
            Year: '',
            // seq: "",
            // glide: "",
            dis_group: '',
            // dis_subgroup: "",
            "Disaster Type": '',
            // dis_subtype: "",
            // dis_subsubtype: "",
            Country: '',
            // iso: "",
            // region: "",
            // continent: "",
            // location: "",
            // associated_dis1: "",
            // dis_mag_scale: "",
            start_year: '',
            start_month: '',
            // start_day: "",
            end_year: '',
            end_month: '',
            // end_day: "",
            // no_affected: "",
            // total_affected: "",
            // cpi: "",
            // adm_level: "",
            // adm_code: "",
            // geo_location: "",
            // total_deaths: "",
            // adm_code2: "",
            // no_injured: "",
            // dis_mag_val: "",
            // origin: "",
            // event_name: "",
            // total_damages: "",
            // total_damages_adj: "",
            // no_homeless: "",
            // lat: "",
            // lon: "",
            // river_basin: "",
            // declaration: "",
            // associated_dis2: "",
            // associated_dis3: "",
            // insured_damages: "",
            // insured_damages_adj: "",
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateDisaster!');
      });
  };

  return (
    <div className='CreateDisaster'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/disaster-admin' className='btn btn-outline-warning float-left'>
              Show Disaster List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h3 className='lead text-center'>Create new disaster</h3>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
              <label>Disaster Number</label>
                <input
                  type='text'
                  placeholder='Disaster Number'
                  name='disno'
                  value={disaster['Dis No']}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
              <label>Year</label>
                <input
                  type='text'
                  placeholder='Year'
                  name='year'
                  value={disaster.Year}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>Disaster Group</label>
                <input
                  type='text'
                  placeholder='Dis Group'
                  name='disgroup'
                  value={disaster.dis_group}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>Disaster Type</label>
                <input
                  type='text'
                  placeholder='Disaster Type'
                  name='distype'
                  value={disaster['Disaster Type']}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>Country</label>
                <input
                  type='text'
                  placeholder='Country'
                  name='country'
                  value={disaster.Country}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>Start Year</label>
                <input
                  type='text'
                  placeholder='Start Year'
                  name='startyear'
                  value={disaster.start_year}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>Start Month</label>
                <input
                  type='text'
                  placeholder='Start Month'
                  value={disaster.start_month}
                  name='startmonth'
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>End Year</label>
                <input
                  type='text'
                  placeholder='End Year'
                  value={disaster.end_year}
                  name='endyear'
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label>End Month</label>
                <input
                  type='text'
                  placeholder='End Month'
                  name='endmonth'
                  value={disaster.end_month}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <br />
              

              <div className='DivButton'>
                <input
                  type='submit'
                  className='DisasterButton'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDisaster;