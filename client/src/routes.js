    import Dashboard from "views/Result";
    import VotingList from "views/VotingList.js";
    import CandidateList from "views/CandidateList";
    import Login from "views/Login/Login";
    import Signup from "views/Signup/Signup";
    // import UserProfile from "views/UserProfile.js";
    // import BsPersonFill from "react-icons/bs";

    const dashboardRoutes = [
      {
        path: "/Candidate_list",
        name: "Candidate List",
        icon: "nc-icon nc-badge",
        component: CandidateList,
        layout: "/admin"
      },
      {
        path: "/Voting_List",
        name: "Vote",
        icon: "nc-icon nc-notes",
        component: VotingList,
        layout: "/admin"
      },
      {
        path: "/Result",
        name: "Result",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin"
      },
      // {
      //   path: "/user",
      //   name: "User Profile",
      //   icon: "nc-icon nc-circle-09",
      //   component: UserProfile,
      //   layout: "/admin"
      // },
    {
      path: "/login",
      component: Login,
      layout : "/auth"
      // icon: "nc-icon nc-lock-circle-open",
    },
   { 
    path: "/Signup",
    component: Signup,
    layout : "/auth"
    // icon: "nc-icon nc-lock-circle-open",
  }
    ];

    export default dashboardRoutes;