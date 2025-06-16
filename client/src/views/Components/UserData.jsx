import "../Votelist_Components/votinglist.css";
const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {candidate_name, party_name, imageURL } = curUser;

                    return (
                        <tr key={candidate_name}>
                            <td>{candidate_name}</td>
                            <td>{party_name}</td>
                            {/* <td>{imageURL}</td> */}
                            <td><img src={imageURL} height={100} width={100}/></td>
                            <td> <input type="radio" name="Party_Selection" id="id" required/></td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default UserData;