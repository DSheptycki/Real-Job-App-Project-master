var jobTitleInput = "";
var companyNameInput = "";
var availabilityInput = "";
var jobDescriptionInput = "";
var requirmentsInput = "";
var prefferedInput = "";
var applyButtonInput = "";

function loadOffering() {
  jobTitleInput = document.getElementById("jobTitleInput").value;
  companyNameInput = document.getElementById("companyNameInput").value;
  availabilityInput = document.getElementById("avaliability-input").value;
  jobDescriptionInput = document.getElementById("jobDescriptionInput").value;
  requirmentsInput = document.getElementById("requirementsInput").value;
  prefferedInput = document.getElementById("preferredInput").value;
  applyButtonInput = document.getElementById("applyButtonInput").value;
  addOffering();
}

function addOffering() {
  const offeringArea = document.getElementById("main");
  const block = document.createElement("div");
  block.id = "offering";

  const jobTitle = document.createElement("h3");
  const jobTitleText = document.createTextNode(jobTitleInput);
  jobTitle.appendChild(jobTitleText);
  jobTitle.id = "job_title";
  block.appendChild(jobTitle);

  const companyName = document.createElement("h5");
  const companyNameText = document.createTextNode(companyNameInput);
  companyName.id = "company_title";
  companyName.style = "color: #a7a7a7";
  companyName.appendChild(companyNameText);
  block.appendChild(companyName);

  const availability = document.createElement("h5");
  const availabilityText = document.createTextNode(availabilityInput);
  availability.id = "avaliability";
  availability.appendChild(availabilityText);
  block.appendChild(availability);

  const jobDescriptionLabel = document.createElement("h5");
  const jobDescriptionLabelText = document.createTextNode("Job Description:");
  jobDescriptionLabel.class = "label";
  jobDescriptionLabel.appendChild(jobDescriptionLabelText);
  block.appendChild(jobDescriptionLabel);

  const jobDescription = document.createElement("p");
  const jobDescriptionText = document.createTextNode(jobDescriptionInput);
  jobDescription.id = "description";
  jobDescription.appendChild(jobDescriptionText);
  block.appendChild(jobDescription);

  const requirmentsLabel = document.createElement("h5");
  const requirmentsLabelText = document.createTextNode("Requirments:");
  requirmentsLabel.class = "label";
  requirmentsLabel.appendChild(requirmentsLabelText);
  block.appendChild(requirmentsLabel);

  const requirments = document.createElement("p");
  const requirmentsText = document.createTextNode(requirmentsInput);
  requirments.id = "requirments";
  requirments.appendChild(requirmentsText);
  block.appendChild(requirments);

  const prefferedLabel = document.createElement("h5");
  const prefferedLabelText = document.createTextNode("Preferred:");
  prefferedLabel.class = "label";
  prefferedLabel.appendChild(prefferedLabelText);
  block.appendChild(prefferedLabel);

  const preffered = document.createElement("p");
  const prefferedText = document.createTextNode(prefferedInput);
  preffered.id = "preferred";
  preffered.appendChild(prefferedText);
  block.appendChild(preffered);

  const applyButton = document.createElement("a");
  const applyButtonText = document.createTextNode("Apply");
  applyButton.id = "apply-button";
  applyButton.href = applyButtonInput;
  applyButton.target = "_blank";
  applyButton.appendChild(applyButtonText);
  block.appendChild(applyButton);

  offeringArea.appendChild(block);
}
