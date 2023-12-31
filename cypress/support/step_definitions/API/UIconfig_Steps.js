/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../UI/Base_Steps";

When("GET Config should return status code should be 200", () => {
  cy.request({
    method: "GET",
    url: "https://officemanagement-api.dev.appsensesolutions.com/api/UIConfigs", // Thay đổi URL tương ứng với API endpoint của bạn
    headers: {
      Authorization: `Bearer` + SecureToken,
    },
  })
    .its("status")
    .should("eq", 200);
});

When("should return config information", () => {
    cy.request({
        method: "GET",
        url: "https://officemanagement-api.dev.appsensesolutions.com/api/UIConfigs", // Replace the URL with your corresponding API endpoint
        headers: {
          Authorization: `Bearer ${SecureToken}`,
        },
      }).then((response) => {
        expect(response.body).to.deep.equal(
            {
                "providerRelations": [
                    "Primary",
                    "Referring",
                    "Default_Rendering_Provider"
                ],
                "insuranceOrder": [
                    "Primary",
                    "Secondary",
                    "Tertiary"
                ],
                "martialStatus": [
                    "Single",
                    "Married",
                    "Divorced",
                    "Widowed",
                    "Separated"
                ],
                "state": [
                    "Alabama",
                    "Alaska",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "Florida",
                    "Georgia",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New_Hampshire",
                    "New_Jersey",
                    "New_Mexico",
                    "New_York",
                    "North_Carolina",
                    "North_Dakota",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Pennsylvania",
                    "Rhode_Island",
                    "South_Carolina",
                    "South_Dakota",
                    "Tennessee",
                    "Texas",
                    "Utah",
                    "Vermont",
                    "Virginia",
                    "Washington",
                    "West_Virginia",
                    "Wisconsin",
                    "Wyoming"
                ],
                "gender": [
                    "Male",
                    "Female",
                    "Others"
                ],
                "relative": [
                    "FamilyMember",
                    "ExtendedFamily",
                    "Friends",
                    "Caregivers",
                    "HealthcareProviders",
                    "Partners",
                    "LegalGuardians"
                ],
                "providerRelationship": [
                    "Primary",
                    "Referring",
                    "Default_Rendering_Provider"
                ],
                "documentTypes": [
                    "DriverLicense",
                    "HIPAA",
                    "InsuranceCard",
                    "IntakeForms",
                    "FinancialForms"
                ],
                "visitStatuses": [
                    "NoCall",
                    "NotArrived",
                    "Checkin",
                    "IntakeWithClinician",
                    "ReadyForPhysician",
                    "PhysicianWithPatient",
                    "DocumentationIncomplete",
                    "DocumentationComplete",
                    "ReadyForBilling",
                    "BillingPending",
                    "Checkout",
                    "BillingComplete",
                    "DischargeWithClinician"
                ],
                "visitTypes": [
                    "Initial",
                    "FollowUp",
                    "DMESupplies",
                    "MedicationRefill",
                    "Consult"
                ],
                "eligibilityStatuses": [
                    "UNVERIFIED",
                    "VERIFIED",
                    "ACTIVE_COVERAGE",
                    "NON_COVERAGE",
                    "INVALID_REQUEST"
                ],
                "employmentStatuses": [
                    "Employed",
                    "Retired",
                    "SelfEmployed",
                    "Unemployed"
                ],
                "serviceTypes": {
                    "1": "Medical Care",
                    "2": "Surgical",
                    "3": "Consultation",
                    "4": "Diagnostic X-Ray",
                    "5": "Diagnostic Lab",
                    "6": "Radiation Therapy",
                    "7": "Anesthesia",
                    "8": "Surgical Assistance",
                    "9": "Other Medical",
                    "10": "Blood Charges",
                    "11": "Used Durable Medical Equipment",
                    "12": "Durable Medical Equipment Purchase",
                    "13": "Ambulatory Service Center Facility",
                    "14": "Renal Supplies in the Home",
                    "15": "Alternate Method Dialysis",
                    "16": "Chronic Renal Disease (CRD) Equipment",
                    "17": "Pre-Admission Testing",
                    "18": "Durable Medical Equipment Rental",
                    "19": "Pneumonia Vaccine",
                    "20": "Second Surgical Opinion",
                    "21": "Third Surgical Opinion",
                    "22": "Social Work",
                    "23": "Diagnostic Dental",
                    "24": "Periodontics",
                    "25": "Restorative",
                    "26": "Endodontics",
                    "27": "Maxillofacial Prosthetics",
                    "28": "Adjunctive Dental Services",
                    "30": "Health Benefit Plan Coverage",
                    "32": "Plan Waiting Period",
                    "33": "Chiropractic",
                    "34": "Chiropractic Office Visits",
                    "35": "Dental Care",
                    "36": "Dental Crowns",
                    "37": "Dental Accident",
                    "38": "Orthodontics",
                    "39": "Prosthodontics",
                    "40": "Oral Surgery",
                    "41": "Routine (Preventive) Dental",
                    "42": "Home Health Care",
                    "43": "Home Health Prescriptions",
                    "44": "Home Health Visits",
                    "45": "Hospice",
                    "46": "Respite Care",
                    "47": "Hospital",
                    "48": "Hospital - Inpatient",
                    "49": "Hospital - Room and Board",
                    "50": "Hospital - Outpatient",
                    "51": "Hospital - Emergency Accident",
                    "52": "Hospital - Emergency Medical",
                    "53": "Hospital - Ambulatory Surgical",
                    "54": "Long Term Care",
                    "55": "Major Medical",
                    "56": "Medically Related Transportation",
                    "57": "Air Transportation",
                    "58": "Cabulance",
                    "59": "Licensed Ambulance",
                    "60": "General Benefits",
                    "61": "In-vitro Fertilization",
                    "62": "MRI/CAT Scan",
                    "63": "Donor Procedures",
                    "64": "Acupuncture",
                    "65": "Newborn Care",
                    "66": "Pathology",
                    "67": "Smoking Cessation",
                    "68": "Well Baby Care",
                    "69": "Maternity",
                    "70": "Transplants",
                    "71": "Audiology Exam",
                    "72": "Inhalation Therapy",
                    "73": "Diagnostic Medical",
                    "74": "Private Duty Nursing",
                    "75": "Prosthetic Device",
                    "76": "Dialysis",
                    "77": "Otological Exam",
                    "78": "Chemotherapy",
                    "79": "Allergy Testing",
                    "80": "Immunizations",
                    "81": "Routine Physical",
                    "82": "Family Planning",
                    "83": "Infertility",
                    "84": "Abortion",
                    "85": "AIDS",
                    "86": "Emergency Services",
                    "87": "Cancer",
                    "88": "Pharmacy",
                    "89": "Free Standing Prescription Drug",
                    "90": "Mail Order Prescription Drug",
                    "91": "Brand Name Prescription Drug",
                    "92": "Generic Prescription Drug",
                    "93": "Podiatry",
                    "94": "Podiatry - Office Visits",
                    "95": "Podiatry - Nursing Home Visits",
                    "96": "Professional (Physician)",
                    "97": "Anesthesiologist",
                    "98": "Professional (Physician) Visit - Office",
                    "99": "Professional (Physician) Visit - Inpatient",
                    "A0": "Professional (Physician) Visit - Outpatient",
                    "A1": "Professional (Physician) Visit - Nursing Home",
                    "A2": "Professional (Physician) Visit - Skilled Nursing Facility",
                    "A3": "Professional (Physician) Visit - Home",
                    "A4": "Psychiatric",
                    "A5": "Psychiatric - Room and Board",
                    "A6": "Psychotherapy",
                    "A7": "Psychiatric - Inpatient",
                    "A8": "Psychiatric - Outpatient",
                    "A9": "Rehabilitation",
                    "AA": "Rehabilitation - Room and Board",
                    "AB": "Rehabilitation - Inpatient",
                    "AC": "Rehabilitation - Outpatient",
                    "AD": "Occupational Therapy",
                    "AE": "Physical Medicine",
                    "AF": "Speech Therapy",
                    "AG": "Skilled Nursing Care",
                    "AH": "Skilled Nursing Care - Room and Board",
                    "AI": "Substance Abuse",
                    "AJ": "Alcoholism",
                    "AK": "Drug Addiction",
                    "AL": "Vision (Optometry)",
                    "AM": "Frames",
                    "AN": "Routine Exam",
                    "AO": "Lenses",
                    "AQ": "Nonmedically Necessary Physical",
                    "AR": "Experimental Drug Therapy",
                    "B1": "Burn Care",
                    "B2": "Brand Name Prescription Drug - Formulary",
                    "B3": "Brand Name Prescription Drug - Non-Formulary",
                    "BA": "Independent Medical Evaluation",
                    "BB": "Partial Hospitalization (Psychiatric)",
                    "BC": "Day Care (Psychiatric)",
                    "BD": "Cognitive Therapy",
                    "BE": "Massage Therapy",
                    "BF": "Pulmonary Rehabilitation",
                    "BG": "Cardiac Rehabilitation",
                    "BH": "Pediatric",
                    "BI": "Nursery",
                    "BJ": "Skin",
                    "BK": "Orthopedic",
                    "BL": "Cardiac",
                    "BM": "Lymphatic",
                    "BN": "Gastrointestinal",
                    "BP": "Endocrine",
                    "BQ": "Neurology",
                    "BR": "Eye",
                    "BS": "Invasive Procedures",
                    "BT": "Gynecological",
                    "BU": "Obstetrical",
                    "BV": "Obstetrical/Gynecological",
                    "BW": "Mail Order Prescription Drug: Brand Name",
                    "BX": "Mail Order Prescription Drug: Generic",
                    "BY": "Physician Visit - Office: Sick",
                    "BZ": "Physician Visit - Office: Well",
                    "C1": "Coronary Care",
                    "CA": "Private Duty Nursing - Inpatient",
                    "CB": "Private Duty Nursing - Home",
                    "CC": "Surgical Benefits - Professional (Physician)",
                    "CD": "Surgical Benefits - Facility",
                    "CE": "Mental Health Provider - Inpatient",
                    "CF": "Mental Health Provider - Outpatient",
                    "CG": "Mental Health Facility - Inpatient",
                    "CH": "Mental Health Facility - Outpatient",
                    "CI": "Substance Abuse Facility - Inpatient",
                    "CJ": "Substance Abuse Facility - Outpatient",
                    "CK": "Screening X-ray",
                    "CL": "Screening laboratory",
                    "CM": "Mammogram, High Risk Patient",
                    "CN": "Mammogram, Low Risk Patient",
                    "CO": "Flu Vaccination",
                    "CP": "Eyewear and Eyewear Accessories",
                    "CQ": "Case Management",
                    "DG": "Dermatology",
                    "DM": "Durable Medical Equipment",
                    "DS": "Diabetic Supplies",
                    "GF": "Generic Prescription Drug - Formulary",
                    "GN": "Generic Prescription Drug - Non-Formulary",
                    "GY": "Allergy",
                    "IC": "Intensive Care",
                    "MH": "Mental Health",
                    "NI": "Neonatal Intensive Care",
                    "ON": "Oncology",
                    "PT": "Physical Therapy",
                    "PU": "Pulmonary",
                    "RN": "Renal",
                    "RT": "Residential Psychiatric Treatment",
                    "TC": "Transitional Care",
                    "TN": "Transitional Nursery Care",
                    "TS": "Transitional Surgical Care",
                    "UC": "Urgent Care",
                    "UD": "Usual and Customary",
                    "VP": "Vision - Professional (Optometry)",
                    "WC": "Wellness Care",
                    "WK": "Work Hardening",
                    "WV": "Women's Health"
                }
            }
        )
    })
});
