import React from "react";
import "./Votelist_Components/votinglist.css";
import { useState, useEffect } from "react";
import ResultData  from "./Components/resultdata";

import { Container } from "react-bootstrap";
const API = "http://localhost:5000/api/candidates";
function Result() {
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
  const divStyle = {
    display: 'block'};
  return (
    <>
      {/* <Container>
      <div class="links" style={divStyle}>
      <table>
    <ul class="links__list">
    <tr class="links__item">
      <td id="CandiList">
        <a class="links__link" href="#">
          <img src={Candidate} alt="" class="links__icon" />
          <span class="links__text">CANDIDATE LIST</span>
        </a>
      </td><br/>
      <td id="Vote">
        <a class="links__link" href="#">
          <img src={Vote} alt="" class="links__icon" />
          <span class="links__text" id="vote">VOTE HERE</span></a>
      </td><br/>
      <td id="Result">
        <a class="links__link" href="#">
          <img src={Result} alt="" class="links__icon" />
          <span class="links__text" id="res">RESULT</span>
        </a><br/>
      </td>
    </tr>
  </ul>
</table>  
</div>
      </Container> */}
      <Container>
			<table class="table">
				<thead>
					<tr>
						<th>Candidate Name</th>
						<th>Party Name</th>
						<th>Party Symbol</th>
						<th>Total Vote</th>
						</tr>
				</thead>
				{/* <tbody>
					<tr>
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<img src={BJP} alt="User Img" className="image"/>
								</div>
								
							</div>
						</td>
						<td>
							Bhartiya Janta Party
						</td>
						<td>Narendra Modi</td>
						<td>"Count"</td>
						<td>
							"Percentage"
						</td>
					</tr>
					<tr>
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<img src={CONGRESS} alt="User Img"className="image"/>
								</div>
							</div>
						</td>
						<td>
							Congress
						</td>
						<td>Rahul Gandhi</td>
						<td>
							"Count"
						</td>
						<td>
							"Percentage"
						</td>
					</tr>
					<tr>
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<img src={AAP} alt="User Img" className="image"/>
								</div>
								
							</div>
						</td>
						<td>
						Aam Admi Party
						</td>
						<td>Arvind Kejriwal</td>
						<td>"Count</td>
						<td>
							"Percentage"
							
						</td>
						
					</tr>
					<tr>
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<img src={MAMMU} alt="User Img" className="image"/>
								</div>
								
							</div>
						</td>
						<td>
							Trinamool Congress
							
						</td>
						<td>Mamta Banarjee</td>
						<td>"Count"</td>
						<td>
							"Percentage"
							
						</td>
						
					</tr>
					<tr>
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<img src={NOTA} alt="User Img"className="image"/>
								</div>
								
							</div>
						</td>
						<td>
							NOTA
							
						</td>
						<td>NOTA</td>
						<td>"Count"</td>
						<td>
							"Percentage"
						</td>
					</tr>
				</tbody> */}
				 <tbody>
         		<ResultData users={users} required/>
        		</tbody>
			</table>
    </Container>
    </>
  );
}

export default Result;
