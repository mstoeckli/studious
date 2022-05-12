/** @desc TODO: -SCHOOLS1: Implement partner project button */
// {
//     key: "partnerProjects", title: "Partner-Projekt(e)",
//     sortable: false,
//     fixed: false,
//     align: "center",
//     isHidden: false,
//     isCheckboxColumn: false
// },

export const Columns = {
    "Schools": [{
        key: "schoolName",
        title: "Schule",
        sortable: true,
        searchable: true,
        ascending: false,
        fixed: true,
        isHidden: false,
        isDropdownActive: false,
        isCheckboxColumn: false
    }, {
        key: "schoolKey",
        title: "Schul-Identifikation",
        sortable: true,
        searchable: true,
        ascending: false,
        fixed: true,
        isHidden: false,
        isDropdownActive: false,
        isCheckboxColumn: false
    }, {
        key: "signin",
        title: "Anmelden",
        sortable: false,
        ascending: false,
        align: "center",
        isHidden: false,
        isCheckboxColumn: false
    }, {
        key: "administrator",
        title: "Administrator",
        sortable: true,
        ascending: false,
        fixed: false,
        isHidden: false,
        isDropdownActive: false,
        isCheckboxColumn: false
    }, {
        key: "joiningDate",
        title: "Beitrittsdatum",
        sortable: false,
        ascending: false,
        fixed: false,
        isHidden: false,
        isDropdownActive: false,
        isCheckboxColumn: false
    }, {
        key: "classTeacher",
        title: "Klassen-Lehrer",
        sortable: false,
        fixed: false,
        align: "center",
        isHidden: false,
        isCheckboxColumn: false
    }, {
        key: "subjectTeacher",
        title: "Fach-Lehrer",
        sortable: false,
        fixed: false,
        align: "center",
        isHidden: false,
        isCheckboxColumn: false
    }, {
        key: "students",
        title: "Schüler",
        sortable: false,
        fixed: false,
        align: "center",
        isHidden: false,
        isCheckboxColumn: false
    }, {
        key: "subscription",
        title: "Abonnement",
        sortable: true,
        ascending: false,
        fixed: false,
        isHidden: false,
        isDropdownActive: false,
        isCheckboxColumn: false
    }]
}