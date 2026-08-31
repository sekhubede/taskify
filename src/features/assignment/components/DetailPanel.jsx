import { PRIORITY_LABELS } from "../data/data";
import { parseDDMMYYYY, formatDate } from "../utils/dateUtils";

function DetailPanel({ assignment, isOpen, onClose }) {
    if (!assignment) return null;

    return (
        <>
        <div
            className={`panel-overlay ${isOpen ? "open" : ""}`}
            onClick={onClose}
        />
        <div className={`detail-panel ${isOpen ? "open" : ""}`}>
            <button className="panel-close" onClick={onClose}>
            ✕
            </button>

            <h3 className="panel-title">{assignment.title}</h3>

            <div className="panel-section">
            <h4>Description</h4>
            <p>{assignment.description}</p>
            </div>

            <hr className="panel-divider" />

            <div className={`panel-section panel-section-grid`}>
            <div>
                <h4>Status</h4>
                <p className="panel-text">
                <strong>{assignment.status}</strong>
                </p>
            </div>
            <div>
                <h4>Priority</h4>
                <p className="panel-text">
                <strong>{PRIORITY_LABELS[assignment.priority]}</strong>
                </p>
            </div>
            <div>
                <h4>Assignees</h4>
                <p className="panel-text">{assignment.assignees}</p>
            </div>
            <div>
                <h4>Deadline</h4>
                <p className="panel-text">
                {formatDate(parseDDMMYYYY(assignment.deadline))}
                </p>
            </div>
            <div className="full-width">
                <h4>Client</h4>
                <p className="panel-text">{assignment.client}</p>
            </div>
            {assignment.reminder && (
                <div className="full-width">
                    <h4>⏰ Reminder</h4>
                    <p className="panel-text">{assignment.reminder}</p>
                </div>
            )}
            </div>

            <hr className="panel-divider" />

            {assignment.subtasks && assignment.subtasks.length > 0 && (
            <div className="panel-section">
                <h4>Subtasks</h4>
                {assignment.subtasks.map((task) => (
                <div key={task.id} className="panel-subtask">
                    <input type="checkbox" checked={task.done} readOnly />
                    <span
                    className={`subtask-text ${task.done ? "done" : ""}`}
                    >
                    {task.text}
                    </span>
                </div>
                ))}
            </div>
            )}

            {assignment.comments && assignment.comments.length > 0 && (
            <div className="panel-section">
                <h4>Comments</h4>
                {assignment.comments.map((comment) => (
                <div key={comment.id} className="panel-comment">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                    <div className="comment-text">{comment.text}</div>
                </div>
                ))}
            </div>
            )}

            <hr className="panel-divider" />

            <div className="panel-section">
            <h4>Actions</h4>
            <div className="panel-actions">
                <button className="panel-action-btn panel-action-btn--primary">
                Start Work
                </button>
                <button className="panel-action-btn panel-action-btn--secondary">
                Add Comment
                </button>
                <button className="panel-action-btn panel-action-btn--secondary">
                Add Subtask
                </button>
            </div>
            </div>
        </div>
        </>
    );
}

export default DetailPanel;