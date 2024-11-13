const mongoose = require('mongoose');

const ReportingPeriodSchema = new mongoose.Schema({
  periodStart: { type: Date, required: true },
  periodEnd: { type: Date, required: true },
  supportProvided: [{
    activity: { type: String, required: true },
    progressTowardsMilestone: { type: String, default: null },
    hoursSpent: { type: Number, required: true }
  }],
  totalSupportHours: {
    totalHours: { type: Number, required: true },
    oneToOnePercentage: { type: Number, required: true },
    groupBasedPercentage: { type: Number, required: true },
    distanceOnlinePercentage: { type: Number, default: null },
    totalPercentage: { type: Number, required: true }
  },
  finalOutcome: {
    continueSupportNextPeriod: { type: String, default: null },
    outcomeAtExit: { type: String, default: null },
    exitDate: { type: Date, required: true },
    exitNotes: { type: String, default: null }
  },
  employmentDetails: {
    status: { type: String, default: null },
    industry: { type: String, default: null },
    employerName: { type: String, default: null },
    averageWeeklyHours: { type: Number, default: null },
    usingNDISSupportsInEmployment: { type: String, default: null },
    supportedWages: { type: String, default: null },
    startDate: { type: Date, default: null },
    employmentNotes: { type: String, default: null }
  }
});

const ParticipantSchema = new mongoose.Schema({
  providerID: { type: String, required: true },
  stateOrTerritory: { type: String, required: true },
  LGA: { type: String, required: true },
  surname: { type: String, required: true },
  firstName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  NDISParticipantNumber: { type: String, required: true },
  primaryDisability: { type: String, required: true },
  employmentServiceStartDate: { type: Date, default: null },
  reportingPeriod_periodStart: { type: Date, required: true },
  reportingPeriod_periodEnd: { type: Date, required: true },
  supportProvided_Assessment_hoursSpent: { type: Number, default: 0 },
  supportProvided_Planning_and_reviewing_progress_hoursSpent: { type: Number, default: 0 },
  supportProvided_Exploring_employment_options_hoursSpent: { type: Number, default: 0 },
  supportProvided_Engagement_with_family_hoursSpent: { type: Number, default: 0 },
  supportProvided_Engagement_with_professionals_hoursSpent: { type: Number, default: 0 },
  supportProvided_Building_social_skills_progressTowardsMilestone: { type: String, default: null },
  supportProvided_Building_social_skills_hoursSpent: { type: Number, default: 0 },
  supportProvided_Travel_training_progressTowardsMilestone: { type: String, default: null },
  supportProvided_Travel_training_hoursSpent: { type: Number, default: 0 },
  supportProvided_Work_skill_training_progressTowardsMilestone: { type: String, default: null },
  supportProvided_Work_skill_training_hoursSpent: { type: Number, default: 0 },
  supportProvided_Employer_engagement_progressTowardsMilestone: { type: String, default: null },
  supportProvided_Employer_engagement_hoursSpent: { type: Number, default: 0 },
  supportProvided_Work_experience_support_progressTowardsMilestone: { type: String, default: null },
  supportProvided_Work_experience_support_hoursSpent: { type: Number, default: 0 },
  supportProvided_On_the_job_support_progressTowardsMilestone: { type: String, default: null },
  supportProvided_On_the_job_support_hoursSpent: { type: Number, default: null },
  supportProvided_Other_activity_description: { type: String, default: null },
  supportProvided_Other_progressAchieved: { type: String, default: null },
  supportProvided_Other_hoursSpent: { type: Number, default: null },
  supportProvided_Additional_notes: { type: String, default: null },
  totalSupportHours_totalHours: { type: Number, default: 0 },
  totalSupportHours_oneToOnePercentage: { type: Number, default: 0 },
  totalSupportHours_groupBasedPercentage: { type: Number, default: 0 },
  totalSupportHours_distanceOnlinePercentage: { type: Number, default: null },
  totalSupportHours_totalPercentage: { type: Number, default: 0 },
  finalOutcome_continueSupportNextPeriod: { type: String, default: null },
  finalOutcome_outcomeAtExit: { type: String, default: null },
  finalOutcome_exitDate: { type: Date, required: true },
  finalOutcome_exitNotes: { type: String, default: null },
  employmentDetails_status: { type: String, default: null },
  employmentDetails_industry: { type: String, default: null },
  employmentDetails_employerName: { type: String, default: null },
  employmentDetails_averageWeeklyHours: { type: Number, default: null },
  employmentDetails_usingNDISSupportsInEmployment: { type: String, default: null },
  employmentDetails_supportedWages: { type: String, default: null },
  employmentDetails_startDate: { type: Date, default: null },
  employmentDetails_employmentNotes: { type: String, default: null },
  reportingPeriods: [ReportingPeriodSchema]
}, { collection: 'Participants' });

module.exports = mongoose.model('Participants', ParticipantSchema);
