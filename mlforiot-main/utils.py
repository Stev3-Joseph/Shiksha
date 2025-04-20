import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

def visualize_student_performance(student_section_performance, student_overall, avg_section_performance, avg_overall_performance, selected_student=None):
    """
    Create visualizations for student performance analysis comparing a selected student with class average
    """
    # Create a figure with three subplots
    fig = plt.figure(figsize=(15, 10))
    
    # Section performance - only selected student vs average
    ax1 = fig.add_subplot(221)
    if selected_student:
        # Get data for the selected student
        student_data = student_section_performance[student_section_performance['student_id'] == selected_student]
        
        sections = ['A', 'B', 'C', 'D']
        section_names = ['Math (A)', 'Verbal (B)', 'Non-verbal (C)', 'Comprehension (D)']
        
        # Prepare data for plotting
        student_scores = []
        avg_scores = []
        
        for section in sections:
            # Get student score for this section
            student_section_data = student_data[student_data['section'] == section]
            if not student_section_data.empty:
                student_scores.append(student_section_data['score_percentage'].values[0])
            else:
                student_scores.append(0)
            
            # Get average score for this section
            avg_section_data = avg_section_performance[avg_section_performance['section'] == section]
            if not avg_section_data.empty:
                avg_scores.append(avg_section_data['avg_score_percentage'].values[0])
            else:
                avg_scores.append(0)
        
        # Create grouped bar chart
        x = np.arange(len(sections))
        width = 0.35
        
        ax1.bar(x - width/2, student_scores, width, label=f'Student {selected_student}', color='skyblue')
        ax1.bar(x + width/2, avg_scores, width, label='Class Average', color='lightgreen')
        
        ax1.set_title('Section-wise Performance: Student vs Average')
        ax1.set_ylabel('Score Percentage')
        ax1.set_xticks(x)
        ax1.set_xticklabels(section_names)
        ax1.set_ylim(0, 100)
        ax1.legend()
        
        # Add value labels
        for i, v in enumerate(student_scores):
            ax1.text(i - width/2, v + 2, f"{v:.1f}%", ha='center')
        for i, v in enumerate(avg_scores):
            ax1.text(i + width/2, v + 2, f"{v:.1f}%", ha='center')
    
    # Overall performance comparison
    ax2 = fig.add_subplot(222)
    if selected_student:
        # Get overall score for selected student
        student_overall_score = student_overall[student_overall['student_id'] == selected_student]['overall_score'].values[0]
        
        # Create bar chart
        scores = [student_overall_score, avg_overall_performance]
        labels = [f'Student {selected_student}', 'Class Average']
        colors = ['skyblue', 'lightgreen']
        
        ax2.bar(labels, scores, color=colors)
        ax2.set_title('Overall Performance Comparison')
        ax2.set_ylabel('Overall Score Percentage')
        ax2.set_ylim(0, 100)
        
        # Add value labels
        for i, v in enumerate(scores):
            ax2.text(i, v + 2, f"{v:.1f}%", ha='center')
    
    # Radar chart for section performance
    ax3 = fig.add_subplot(212, polar=True)
    if selected_student:
        # Get data for radar chart
        sections = ['A', 'B', 'C', 'D']
        section_names = ['Math', 'Verbal', 'Non-verbal', 'Comprehension']
        
        # Get student scores for each section
        student_scores = []
        for section in sections:
            student_section_data = student_data[student_data['section'] == section]
            if not student_section_data.empty:
                student_scores.append(student_section_data['score_percentage'].values[0])
            else:
                student_scores.append(0)
        
        # Get average scores for each section
        avg_scores = []
        for section in sections:
            avg_section_data = avg_section_performance[avg_section_performance['section'] == section]
            if not avg_section_data.empty:
                avg_scores.append(avg_section_data['avg_score_percentage'].values[0])
            else:
                avg_scores.append(0)
        
        # Number of variables
        N = len(sections)
        
        # What will be the angle of each axis in the plot
        angles = [n / float(N) * 2 * np.pi for n in range(N)]
        angles += angles[:1]  # Close the loop
        
        # Add student scores
        student_scores += student_scores[:1]  # Close the loop
        ax3.plot(angles, student_scores, linewidth=2, linestyle='solid', label=f"Student {selected_student}", color='skyblue')
        ax3.fill(angles, student_scores, alpha=0.1, color='skyblue')
        
        # Add average scores
        avg_scores += avg_scores[:1]  # Close the loop
        ax3.plot(angles, avg_scores, linewidth=2, linestyle='--', label="Class Average", color='green')
        ax3.fill(angles, avg_scores, alpha=0.1, color='green')
        
        # Set labels for each axis
        ax3.set_xticks(angles[:-1])
        ax3.set_xticklabels(section_names)
        
        # Set radar chart properties
        ax3.set_ylim(0, 100)  # Ensure y-axis goes from 0 to 100
        ax3.set_title('Section Performance Radar Chart')
        ax3.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1))
    
    plt.tight_layout(pad=3.0)
    return fig

def visualize_student_vs_average(student_data, avg_section_performance, section_mapping):
    """
    Create visualization comparing a student's performance with the class average
    """
    # Create a bar chart comparing student performance with average
    fig, ax = plt.subplots(figsize=(10, 6))
    
    # Get student scores by section
    sections = student_data['section'].values
    student_scores = student_data['score_percentage'].values
    
    # Get average scores for the same sections
    avg_scores = []
    for section in sections:
        avg_score = avg_section_performance[avg_section_performance['section'] == section]['avg_score_percentage'].values[0]
        avg_scores.append(avg_score)
    
    # Set up bar positions
    x = np.arange(len(sections))
    width = 0.35
    
    # Create bars
    student_bars = ax.bar(x - width/2, student_scores, width, label='Student Performance', color='skyblue')
    avg_bars = ax.bar(x + width/2, avg_scores, width, label='Class Average', color='lightgreen')
    
    # Add labels and title
    ax.set_ylabel('Score (%)')
    ax.set_title('Student Performance vs. Class Average by Section')
    ax.set_xticks(x)
    
    # Use subject names instead of section codes
    subject_names = [f"{section_mapping[s]} ({s})" for s in sections]
    ax.set_xticklabels(subject_names)
    ax.legend()
    
    # Add value labels on top of bars
    for bars in [student_bars, avg_bars]:
        for bar in bars:
            height = bar.get_height()
            ax.annotate(f'{height:.1f}%',
                        xy=(bar.get_x() + bar.get_width() / 2, height),
                        xytext=(0, 3),  # 3 points vertical offset
                        textcoords="offset points",
                        ha='center', va='bottom')
    
    # Set y-axis limit to ensure all bars are visible
    ax.set_ylim(0, max(max(student_scores), max(avg_scores)) * 1.15)
    
    plt.tight_layout()
    return fig

def visualize_topic_performance(topic_analysis, section_mapping):
    """
    Create visualization for topic-level performance analysis
    """
    if topic_analysis.empty:
        # Create empty figure if no data
        fig, ax = plt.subplots(figsize=(10, 6))
        ax.text(0.5, 0.5, "No topic data available", ha='center', va='center', fontsize=14)
        ax.axis('off')
        return fig
    
    # Create a figure with subplots for each section
    sections = topic_analysis['section'].unique()
    n_sections = len(sections)
    
    if n_sections == 0:
        # Create empty figure if no sections
        fig, ax = plt.subplots(figsize=(10, 6))
        ax.text(0.5, 0.5, "No topic data available", ha='center', va='center', fontsize=14)
        ax.axis('off')
        return fig
    
    # Calculate grid dimensions
    n_cols = min(2, n_sections)
    n_rows = (n_sections + n_cols - 1) // n_cols
    
    fig, axes = plt.subplots(n_rows, n_cols, figsize=(15, 5 * n_rows))
    
    # Convert to 2D array if only one row
    if n_rows == 1 and n_cols == 1:
        axes = np.array([[axes]])
    elif n_rows == 1 or n_cols == 1:
        axes = np.array(axes).reshape(n_rows, n_cols)
    
    # Plot each section
    for i, section in enumerate(sections):
        row = i // n_cols
        col = i % n_cols
        ax = axes[row, col]
        
        # Filter data for this section
        section_data = topic_analysis[topic_analysis['section'] == section].sort_values('accuracy')
        
        # Get section name
        section_name = section_mapping.get(section, f"Section {section}")
        
        # Create horizontal bar chart
        colors = ['#ff9999' if is_weak else '#99ccff' for is_weak in section_data['is_weak']]
        bars = ax.barh(section_data['topic'], section_data['accuracy'], color=colors)
        
        # Add labels
        ax.set_title(f"{section_name} (Section {section}) - Topic Performance")
        ax.set_xlabel('Accuracy (%)')
        ax.set_xlim(0, 100)
        
        # Add value labels
        for bar in bars:
            width = bar.get_width()
            ax.text(min(width + 2, 95), 
                   bar.get_y() + bar.get_height()/2, 
                   f"{width:.1f}%", 
                   va='center')
        
        # Add a line for 50% threshold
        ax.axvline(x=50, color='red', linestyle='--', alpha=0.7)
        ax.text(50, ax.get_ylim()[1] * 0.95, "50%", va='top', ha='center', color='red')
    
    # Hide empty subplots
    #final
    for i in range(n_sections, n_rows * n_cols):
        row = i // n_cols
        col = i % n_cols
        axes[row, col].axis('off')
    
    plt.tight_layout(pad=3.0)
    return fig
