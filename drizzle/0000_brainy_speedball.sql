CREATE TABLE `progress` (
	`id` text PRIMARY KEY NOT NULL,
	`student_id` text NOT NULL,
	`unit_id` text NOT NULL,
	`completed_at` text DEFAULT (datetime('now')) NOT NULL,
	FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `progress_student_idx` ON `progress` (`student_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `progress_student_unit_idx` ON `progress` (`student_id`,`unit_id`);--> statement-breakpoint
CREATE TABLE `students` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`is_staff` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT (datetime('now')) NOT NULL,
	`last_seen_at` text DEFAULT (datetime('now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `students_email_idx` ON `students` (`email`);