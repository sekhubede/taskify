import { PRIORITY_LABELS, ASSIGNMENT_STATES } from "../data/data";
import { getPriorityClass, getStatusClass } from "../utils/classHelpers";
import { parseDDMMYYYY, formatDate } from "../utils/dateUtils";

function AssignmentCard({ assignment, onCardClick }) {
  const assignmentDeadline = parseDDMMYYYY(assignment.deadline);

  const isOverdue =
    assignmentDeadline !== null &&
    assignmentDeadline < new Date() &&
    assignment.status !== ASSIGNMENT_STATES.COMPLETED &&
    assignment.status !== ASSIGNMENT_STATES.BILLED;

  const deadlineClass = isOverdue ? "overdue" : "";
  const deadlineDate = assignmentDeadline
    ? formatDate(assignmentDeadline)
    : "No deadline set";

  return (
    <li
      className={`assignment-card 
      ${getPriorityClass(PRIORITY_LABELS[assignment.priority])}`}
      onClick={() => onCardClick(assignment)}
    >
      <h3 className="card-title">{assignment.title}</h3>
      <hr className="card-divider"/>
      <p className="card-description">{assignment.description}</p>
      <p
        className={`card-status ${getStatusClass(assignment.status)}`}
      >
        {assignment.status}
      </p>
      <hr className='card-divider'/>
      <div className="card-footer">
        <div className="card-footer-left">
          <p className="card-assignee">{assignment.assignees}</p>
          <p className="card-client">{assignment.client}</p>
        </div>
        <div className="card-footer-right">
          <span className={`card-deadline ${deadlineClass}`}>
            Due: {deadlineDate}
          </span>
          {assignment.reminder && (
            <span className="card-reminder">
              ⏰ {assignment.reminder}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default AssignmentCard;
