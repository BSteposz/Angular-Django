from django.db import models

# Create your models here.


class Feedback(models.Model):
    name = models.CharField(max_length=80)
    feedback = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return f"Comment created by {self.name}"
