import React from "react";
import UserData  from "./Components/UserData";
import "./Votelist_Components/votinglist.css";
import { useState, useEffect } from "react";
import {
  Container,
} from "react-bootstrap";
// import { event } from "jquery";
const API = "http://localhost:5000/api/candidates";

function TableList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUsers(API);
    }, [])
  return (
    <>
      <Container>
      <div class="container">
        <table class="table">
            <thead>
                <tr>
                    {/* <th>Candidate Profile</th> */}
                    <th>Candidate name</th>
                    <th>Party Name</th>
                    <th>Party symbol</th>
                    <th>VOTE</th>						
                {/* <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th> */}
                </tr>
            </thead>
            {/* <tbody>
                <tr>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={Modi} alt="User Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        <h5>Narendra Modi</h5>
                    </td>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={BJP} alt="partysymbl Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        Bhartiya Janta Party
                    </td>
                    <td>
                        
                            <input type="radio" id="partyselection" name="partyselection" value="partyselection"/>
                            <label for="BJP"></label>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={PAPPU} alt="User Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        <h5>Rahul Gandhi</h5>
                    </td>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={CONGRESS} alt="partysymbl Img" class="image"/> 
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        Congress
                    </td>
                    <td>
                        
                            <input type="radio" id="partyselection" name="partyselection" value="partyselection"/>
                            <label for="Congress"></label>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={MAMTA} alt="User Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        <h5>Mamta Banerjee</h5>
                    </td>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={MAMMU} alt="partysymbl Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        Trinamool Congress
                    </td>
                    <td>
                        
                            <input type="radio" id="partyselection" name="partyselection" value="partyselection"/>
                            <label for="TC"></label>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={AKJ} alt="User Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        <h5>Arvind Kejriwal</h5>
                    </td>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={AAP} alt="partysymbl Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        Aam Admi Party
                    </td>
                    <td>
                        
                            <input type="radio" id="partyselection" name="partyselection" value="partyselection"/>
                            <label for="AAP"></label>
                        
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={NOTA} alt="User Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        <h5>NOTA</h5>
                    </td>
                    <td>
                        <div class="user-info">
                            <div class="user-info__img">
                                <img src={NOTA} alt="partysymbl Img" class="image"/>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                        NOTA
                    </td>
                    <td>
                        
                            <input type="radio" id="partyselection" name="partyselection" value="partyselection"/>
                            <label for="NOTA"></label>
                        
                    </td>
                </tr>
        </tbody> */}
        <tbody>
        <UserData users={users}/>
        </tbody>
        </table>
        </div>
      </Container>
      <Container>
      <div>
      <button id="submit-btn">submit</button>
        </div>
      </Container>
    </>
  );
}
export default TableList;
