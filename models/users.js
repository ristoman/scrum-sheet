UserSchema = new SimpleSchema({
    username: {
        type: String,
        label: "Name",
        max: 50
    },
    team: {
        type: String,
        label: "Team",
        max: 1000
    }
});