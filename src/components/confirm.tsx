const Confirm = ({ open, user, onCancel, onConfirm }: any) => {
if (!open) return null;


return (
<div className="modal-backdrop">
<div className="modal small">
<p>Delete {user?.name}?</p>
<div className="modal-actions">
<button className="btn" onClick={onCancel}>Cancel</button>
<button className="btn danger" onClick={onConfirm}>Delete</button>
</div>
</div>
</div>
);
};


export default Confirm;