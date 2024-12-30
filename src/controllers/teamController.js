import Team from "../models/team.js";

export const createTeam = async (req, res) => {
  try {
    const { name, organizationId } = req.body;
    const team = await Team.create({ name, organizationId });
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("organizationId");
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
