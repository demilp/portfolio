import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnaZi5KLOcogH1u/Projects"
});

const airtableAPIKey = "key2r8YPfnqdhnlVl";

Axios.defaults.headers.common = { Authorization: `Bearer ` + airtableAPIKey };

export default {
  getProjects() {
    return Axios.get("?view=Ordered");
  },
  getProject(slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'");
  }
};
