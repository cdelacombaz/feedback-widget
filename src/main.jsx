import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const feedbackWidgetRoot = document.getElementById('feedback-widget-root')
console.log('feedbackWidgetRoot loading', feedbackWidgetRoot)

const renderWidget = () => {
  if (feedbackWidgetRoot) {
    const projectId = feedbackWidgetRoot.getAttribute('data-project-id')
    const assigneeId = feedbackWidgetRoot.getAttribute('data-assignee-id')
    const apiUrl = feedbackWidgetRoot.getAttribute('data-api-url')
    const issueTypeId = feedbackWidgetRoot.getAttribute('data-issue-type-id')
    console.log(
      'feedbackWidgetRoot found. Rendering widget.',
      projectId,
      assigneeId,
      apiUrl,
      issueTypeId
    )
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
  } else {
    console.log('feedbackWidgetRoot not found. Retrying in 5 seconds.')
    setTimeout(renderWidget, 5000)
  }
}

renderWidget()
