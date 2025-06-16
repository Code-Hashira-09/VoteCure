const ResultData = ({users}) => {
    // document.getElementById("submit-btn").onclick = function(){
    //     const selection_party = document.getElementById("selection_party");
    //     if(selection_party.checked){
    //         console.log("you have selected radio button");
    //     }
    // }
    return (
        <>
            {
                users.map((curUser) => {
                    const {candidate_name, party_name, imageURL } = curUser;
                    // const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={candidate_name}>
                            <td>{candidate_name}</td>
                            <td>{party_name}</td>
                            <td><img src={imageURL} height={100} width={100}/></td>
                            <td></td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default ResultData;