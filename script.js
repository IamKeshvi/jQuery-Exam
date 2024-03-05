$(document).ready(function() {
    $(".add_task").click(function() {
        var taskName = $(".add_new_task").val();
        if (taskName !== "") {
            $("#tasks").append(
                '<li><span class="task">' +
                taskName +
                '</span><button class="delete">Delete</button></li>'
            );
            $(".add_new_task").val("");
        }
    });

    // Mark Task as Completed
    $("#tasks").on("click", ".task", function() {
        $(this).toggleClass("completed");
    });

    // Delete Task
    $("#tasks").on("click", ".delete", function() {
        $(this).parent().remove();
    });

    // Toggle dark mode
    $(".light_dark_mode").click(function() {
        $("body").toggleClass("dark-mode");
    });
});