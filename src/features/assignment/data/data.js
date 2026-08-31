/**
 * @typedef {object} Comment
 * @property {number} id
 * @property {string} author
 * @property {string} date - DD/MM/YYYY
 * @property {string} text
 *
 * @typedef {object} Subtask
 * @property {number} id
 * @property {string} text
 * @property {string} createdAt - DD/MM/YYYY
 * @property {boolean} done
 *
 * @typedef {object} Note
 * @property {number} id
 * @property {string} text
 * @property {string} createdAt - DD/MM/YYYY
 */

/**
 * @typedef {object} Assignment
 * @property {number} id - M-Files Object ID
 * @property {string} title - Assignment title
 * @property {string} description - Assignment description
 * @property {string} client - O'Neil client name
 * @property {number} priority - 1=Critical, 2=High, 3=Medium, 4=Low, 5=Not Determined
 * @property {string} status - M-Files workflow state. See ASSIGNMENT_STATES
 * @property {Array<string>} assignees - Assigned team members
 * @property {string} deadline - ISO 8601 date string
 * @property {boolean} today - Assignment flag for tabs classification
 * @property {boolean} thisWeek - Assignment flag for tabs classification
 * @property {Array<Comment>} comments - Version-specific comments on the assignment
 * @property {Array<Subtask>} subtasks - Actionable sub-items for this assignment
 * @property {Array<Note>} notes - Internal notes on the assignment
 * @property {string} reminder - Assignment reminder for notification
 */

export const PRIORITY_LABELS = {
  1: "Critical",
  2: "High",
  3: "Medium",
  4: "Low",
  5: "Not Determined Yet"
};

export const TABS = {
  TODAY: "today",
  THIS_WEEK: "week",
  ALL: "all"
};

export const ASSIGNMENT_STATES = {
  ASSIGNED: "Assigned",
  // User reviews description, moves to In Progress when understood
  // TODO: V2 - AI breakdown of assignment into actionables

  IN_PROGRESS: "In Progress",
  // User is actively working on the assignment

  ON_HOLD: "On Hold",
  // Blocked - waiting on client response or external dependency

  UPDATE_REQUIRED: "Update Required",
  // Manager/HOD needs an update from assignee
  // TODO: v2 - UI alert to replace current email notification (email unreliable)

  AWAITING_REVIEW: "Awaiting Review",
  // User submits for review, Approval Assignment created and linked
  // Both team lead and HOD must approve
  // On rejection: returns to In Progress, user checks assignment + approval for comments

  APPROVED: "Approved",
  // Dual approval complete, user can mark as complete

  COMPLETED: "Completed",
  // Assignment marked complete by user

  BILLED: "Billed"
  // Completed and billed, archive state
};

export const ASSIGNMENTS = [
  {
    id: 1,
    title: "2026/07/09 Cloud Migration Strategy - Financial Services",
    description:
      "Design and architect a comprehensive cloud migration strategy for a legacy financial services platform. Scope includes assessment of current infrastructure, identification of migration patterns (rehost, replatform, refactor), and development of a phased implementation roadmap with risk mitigation strategies.",
    client: "GLOBAL BANKING SOLUTIONS INC.",
    priority: 1,
    status: ASSIGNMENT_STATES.ASSIGNED,
    assignees: ["Sarah Mitchell", "James Rodriguez", "Priya Patel"],
    deadline: "09/07/2026",
    today: true,
    thisWeek: true,
    comments: [
      {
        id: 1,
        author: "Sarah Mitchell",
        date: "10/07/2026",
        text: "Initial architecture assessment completed. Drafting migration roadmap."
      },
      {
        id: 2,
        author: "James Rodriguez",
        date: "11/07/2026",
        text: "Security compliance requirements identified. Need to align with SOC2 standards."
      },
      {
        id: 3,
        author: "Priya Patel",
        date: "12/07/2026",
        text: "Cost optimization analysis in progress. Estimated 30% cloud savings."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Conduct infrastructure assessment",
        createdAt: "08/07/2026",
        done: true
      },
      {
        id: 2,
        text: "Define migration patterns",
        createdAt: "09/07/2026",
        done: false
      },
      {
        id: 3,
        text: "Create phased implementation plan",
        createdAt: "09/07/2026",
        done: false
      },
      {
        id: 4,
        text: "Develop risk mitigation strategy",
        createdAt: "10/07/2026",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        text: "Client meeting rescheduled to Thursday 10AM",
        createdAt: "08/07/2026"
      },
      {
        id: 2,
        text: "Budget approved for Phase 1 ($250K)",
        createdAt: "09/07/2026"
      },
      {
        id: 3,
        text: "Additional security team resources requested",
        createdAt: "11/07/2026"
      }
    ],
    reminder: "2 hours before"
  },
  {
    id: 2,
    title: "2026/04/24 Customer Data Integration Platform",
    description:
      "Build a unified customer data integration platform that consolidates data from multiple sources (CRM, billing, support). Create ETL pipelines, ensure data quality, and provide a centralized API for downstream services. Include real-time sync capabilities and conflict resolution.",
    client: "TECHNOVA SOLUTIONS PTY LTD",
    priority: 2,
    status: ASSIGNMENT_STATES.IN_PROGRESS,
    assignees: ["Emma Thompson"],
    deadline: "24/04/2026",
    today: true,
    thisWeek: true,
    comments: [
      {
        id: 1,
        author: "Emma Thompson",
        date: "20/04/2026",
        text: "ETL pipeline design completed. Starting implementation."
      },
      {
        id: 2,
        author: "Michael Chen",
        date: "21/04/2026",
        text: "API framework ready. Integration with CRM in progress."
      },
      {
        id: 3,
        author: "Emma Thompson",
        date: "22/04/2026",
        text: "Data validation layer implemented. 75% of data sources integrated."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Design ETL pipeline architecture",
        createdAt: "20/04/2026",
        done: true
      },
      {
        id: 2,
        text: "Implement data extraction layer",
        createdAt: "20/04/2026",
        done: false
      },
      {
        id: 3,
        text: "Build API gateway",
        createdAt: "21/04/2026",
        done: false
      },
      {
        id: 4,
        text: "Set up monitoring and logging",
        createdAt: "22/04/2026",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        text: "Source systems have inconsistent schema definitions. Need mapping strategy.",
        createdAt: "20/04/2026"
      },
      {
        id: 2,
        text: "Client requested additional data source (marketing automation tool)",
        createdAt: "21/04/2026"
      }
    ],
    reminder: "End of Day"
  },
  {
    id: 3,
    title: "2026/07/21 Member Portal Development",
    description:
      "Develop a comprehensive member portal with authentication, profile management, and document access features. Include role-based access control, audit logging, and integration with existing directory services. Focus on responsive design and accessibility compliance.",
    client: "NATIONAL ASSOCIATION OF PROFESSIONALS",
    priority: 3,
    status: ASSIGNMENT_STATES.ON_HOLD,
    assignees: [],
    deadline: "21/07/2026",
    today: false,
    thisWeek: true,
    comments: [
      {
        id: 1,
        author: "Lisa Park",
        date: "15/07/2026",
        text: "UI wireframes approved by client. Frontend development started."
      },
      {
        id: 2,
        author: "Robert Wilson",
        date: "18/07/2026",
        text: "Authentication service implemented. Awaiting directory integration."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Design UI/UX prototypes",
        createdAt: "21/07/2026",
        done: false
      },
      {
        id: 2,
        text: "Implement authentication",
        createdAt: "21/07/2026",
        done: false
      },
      {
        id: 3,
        text: "Build profile management features",
        createdAt: "22/07/2026",
        done: false
      },
      {
        id: 4,
        text: "Integrate document management",
        createdAt: "22/07/2026",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        text: "Client requested additional features (member directory)",
        createdAt: "22/07/2026"
      },
      {
        id: 2,
        text: "Database schema revision needed for new requirements",
        createdAt: "23/07/2026"
      }
    ],
    reminder: null
  },
  {
    id: 4,
    title: "2026/06/24 Legal Case Management Dashboard",
    description:
      "Create an interactive dashboard for legal case management with comprehensive filtering, advanced search, and visual analytics. Support multiple object types including cases, complaints, and hearings. Include customizable views and real-time data updates.",
    client: "FEDERAL JUSTICE DEPARTMENT",
    priority: 4,
    status: ASSIGNMENT_STATES.UPDATE_REQUIRED,
    assignees: ["David Kim", "Rachel Adams"],
    deadline: "24/06/2026",
    today: false,
    thisWeek: false,
    comments: [
      {
        id: 1,
        author: "David Kim",
        date: "24/06/2026",
        text: "Dashboard prototype ready. Need backend integration."
      },
      {
        id: 2,
        author: "Rachel Adams",
        date: "25/06/2026",
        text: "API endpoints designed. Working on data aggregation."
      },
      {
        id: 3,
        author: "David Kim",
        date: "26/06/2026",
        text: "Client requested additional filters and export features."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Define data model",
        createdAt: "20/06/2026",
        done: true
      },
      {
        id: 2,
        text: "Design dashboard wireframes",
        createdAt: "21/06/2026",
        done: false
      },
      {
        id: 3,
        text: "Implement backend APIs",
        createdAt: "22/06/2026",
        done: false
      },
      {
        id: 4,
        text: "Develop frontend components",
        createdAt: "23/06/2026",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        text: "Data privacy requirements need clarification.",
        createdAt: "24/06/2026"
      },
      {
        id: 2,
        text: "Performance optimization needed for large datasets.",
        createdAt: "25/06/2026"
      }
    ],
    reminder: null
  },
  {
    id: 5,
    title: "2026/09/30 Document Retrieval System Upgrade",
    description:
      "Design and implement an enhanced document retrieval system with improved search capabilities, intelligent indexing, and automated workflows. The system should handle multiple document formats, support version control, and provide a user-friendly interface for efficient document discovery.",
    client: "CORPORATE RECORDS MANAGEMENT INC.",
    priority: 5,
    status: ASSIGNMENT_STATES.AWAITING_REVIEW,
    assignees: ["Jennifer Lee", "Thomas Anderson", "Maria Garcia"],
    deadline: "30/09/2026",
    today: false,
    thisWeek: false,
    comments: [
      {
        id: 1,
        author: "Jennifer Lee",
        date: "15/09/2026",
        text: "Search engine optimization complete. Indexing 50K+ documents."
      },
      {
        id: 2,
        author: "Thomas Anderson",
        date: "18/09/2026",
        text: "Workflow automation module under development. 70% complete."
      },
      {
        id: 3,
        author: "Maria Garcia",
        date: "20/09/2026",
        text: "System performance testing shows 40% improvement over legacy system."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Conduct system analysis",
        createdAt: "01/09/2026",
        done: true
      },
      {
        id: 2,
        text: "Design search architecture",
        createdAt: "05/09/2026",
        done: true
      },
      {
        id: 3,
        text: "Implement indexing engine",
        createdAt: "10/09/2026",
        done: false
      },
      {
        id: 4,
        text: "Develop user interface",
        createdAt: "15/09/2026",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        text: "Legacy data migration planning in progress.",
        createdAt: "19/09/2026"
      },
      {
        id: 2,
        text: "User acceptance testing scheduled for October 1.",
        createdAt: "21/09/2026"
      }
    ],
    reminder: null
  },
  {
    id: 6,
    title: "2026/12/18 Security Framework Implementation",
    description:
      "Design and implement a comprehensive security framework including identity management, authentication, authorization, and audit logging. Develop security policies, conduct risk assessment, and ensure compliance with industry standards.",
    client: "SECURE SOLUTIONS GROUP",
    priority: 3,
    status: ASSIGNMENT_STATES.APPROVED,
    assignees: ["Mark Thompson", "Sophia Chen"],
    deadline: "18/12/2026",
    today: false,
    thisWeek: false,
    comments: [
      {
        id: 1,
        author: "Mark Thompson",
        date: "01/12/2026",
        text: "Security architecture designed. Framework documentation started."
      },
      {
        id: 2,
        author: "Sophia Chen",
        date: "08/12/2026",
        text: "Authentication module implementation complete. Moving to authorization."
      },
      {
        id: 3,
        author: "Mark Thompson",
        date: "10/12/2026",
        text: "Client reviewed security policies. Minor adjustments requested."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Conduct security risk assessment",
        createdAt: "01/12/2026",
        done: true
      },
      {
        id: 2,
        text: "Design security architecture",
        createdAt: "05/12/2026",
        done: true
      },
      {
        id: 3,
        text: "Implement authentication module",
        createdAt: "08/12/2026",
        done: false
      },
      {
        id: 4,
        text: "Develop authorization policies",
        createdAt: "10/12/2026",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        text: "Compliance with GDPR and CCPA required.",
        createdAt: "05/12/2026"
      },
      {
        id: 2,
        text: "Budget increased by 15% for additional resources.",
        createdAt: "09/12/2026"
      }
    ],
    reminder: null
  },
  {
    id: 7,
    title: "2026/06/22 Employee Records Data Standardization",
    description:
      "Develop a comprehensive data standardization process for employee records across multiple HR systems. Standardize name formats, employee IDs, department codes, and job titles. Create validation rules, error handling, and automated correction processes.",
    client: "GLOBAL TALENT MANAGEMENT INC.",
    priority: 2,
    status: ASSIGNMENT_STATES.COMPLETED,
    assignees: ["Natalie Foster", "Brian Park"],
    deadline: "22/06/2026",
    today: false,
    thisWeek: false,
    comments: [
      {
        id: 1,
        author: "Natalie Foster",
        date: "15/06/2026",
        text: "Data analysis complete. Identified 5,000+ records requiring standardization."
      },
      {
        id: 2,
        author: "Brian Park",
        date: "18/06/2026",
        text: "Automation script tested and validated. Ready for production."
      },
      {
        id: 3,
        author: "Natalie Foster",
        date: "20/06/2026",
        text: "Production deployment successful. All employee records standardized."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Analyze current data quality",
        createdAt: "10/06/2026",
        done: true
      },
      {
        id: 2,
        text: "Define standardization rules",
        createdAt: "15/06/2026",
        done: true
      },
      {
        id: 3,
        text: "Develop automation scripts",
        createdAt: "18/06/2026",
        done: true
      },
      {
        id: 4,
        text: "Deploy to production",
        createdAt: "20/06/2026",
        done: true
      }
    ],
    notes: [
      {
        id: 1,
        text: "Data quality issues found in legacy systems.",
        createdAt: "12/06/2026"
      },
      {
        id: 2,
        text: "Client requested quarterly data quality reports.",
        createdAt: "21/06/2026"
      }
    ],
    reminder: null
  },
  {
    id: 8,
    title: "2026/05/27 Monthly Data Quality Assessment - Q2 2026",
    description:
      "Conduct comprehensive data quality assessment across all production systems. Monitor data quality metrics, identify data anomalies, and generate detailed reports. Track key performance indicators including completeness, accuracy, consistency, and timeliness.",
    client: "ENTERPRISE DATA SOLUTIONS INC.",
    priority: 2,
    status: ASSIGNMENT_STATES.BILLED,
    assignees: ["Stephanie Williams", "David Lee", "Michelle Park"],
    deadline: "27/05/2026",
    today: false,
    thisWeek: false,
    comments: [
      {
        id: 1,
        author: "Stephanie Williams",
        date: "01/05/2026",
        text: "Data quality assessment framework established. Baseline metrics collected."
      },
      {
        id: 2,
        author: "David Lee",
        date: "10/05/2026",
        text: "Monthly data validation across 5 major systems. 98.5% overall accuracy."
      },
      {
        id: 3,
        author: "Michelle Park",
        date: "20/05/2026",
        text: "Automated reporting pipeline implemented. Real-time monitoring activated."
      },
      {
        id: 4,
        author: "Stephanie Williams",
        date: "27/05/2026",
        text: "Monthly assessment complete. Client presentation scheduled for June 1st."
      }
    ],
    subtasks: [
      {
        id: 1,
        text: "Set up data quality metrics",
        createdAt: "01/05/2026",
        done: true
      },
      {
        id: 2,
        text: "Collect baseline measurements",
        createdAt: "01/05/2026",
        done: true
      },
      {
        id: 3,
        text: "Generate monthly report",
        createdAt: "25/05/2026",
        done: true
      },
      {
        id: 4,
        text: "Submit for client review",
        createdAt: "27/05/2026",
        done: true
      }
    ],
    notes: [
      {
        id: 1,
        text: "New data quality tools implemented this month.",
        createdAt: "01/05/2026"
      },
      {
        id: 2,
        text: "Significant improvement in data completeness (+12%).",
        createdAt: "15/05/2026"
      }
    ],
    reminder: null
  }
];
