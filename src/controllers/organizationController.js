import Organization from "../models/organization.js";

// Create a new organization
export const createOrganization = async (req, res) => {
  try {
    const { name, email, location } = req.body;

    const organization = await Organization.create({ name, email, location });
    res.status(201).json(organization);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all organizations
export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
