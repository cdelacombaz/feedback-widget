import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const feedbackWidgetRoot = document.getElementById('feedback-widget-root')
console.log('feedbackWidgetRoot loading', feedbackWidgetRoot)
if (feedbackWidgetRoot) {
  const projectId = feedbackWidgetRoot.getAttribute('data-project-id')
  const assigneeId = feedbackWidgetRoot.getAttribute('data-assignee-id')
  const apiUrl = feedbackWidgetRoot.getAttribute('data-api-url')
  const issueTypeId = feedbackWidgetRoot.getAttribute('data-issue-type-id')

  ReactDOM.render(
    <React.StrictMode>
      <App
        projectId={projectId}
        assigneeId={assigneeId}
        apiUrl={apiUrl}
        issueTypeId={issueTypeId}
      />
    </React.StrictMode>,
    feedbackWidgetRoot
  )
}
