package com.project.ficha;

import java.io.Serializable; 
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Version;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import com.fasterxml.jackson.annotation.JsonIgnore;

@MappedSuperclass
public class AbstractEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column
	@org.hibernate.annotations.Type(type="uuid-char")
	private UUID id;

	@Column(name = "created_by")
	@CreatedBy
	private String createdBy;

	@Column(name = "modified_by")
	@LastModifiedBy
	private String modifiedBy;

	@Version
	private int version;

	@CreatedDate
	@Column(name = "created_date")
	private LocalDateTime createdDate;

	@LastModifiedDate
	@Column(name = "update_date")
	private LocalDateTime updateDate;

	@JsonIgnore
	public boolean isNew() {
		return id == null;
	}

	public UUID getId() {
		return id;
	}

	public int getVersion() {
		return version;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	@JsonIgnore
	public String getFriendlyCreatedDate() {
		if(createdDate == null)
			createdDate = LocalDateTime.now();

		Date date = Date.from(createdDate.atZone(ZoneId.systemDefault()).toInstant());

		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		return format.format(date);
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getUpdateDate() {
		return updateDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	@JsonIgnore
	public String getFriendlyUpdateDate() {
		if(updateDate == null)
			updateDate = LocalDateTime.now();

		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		return format.format(updateDate);
	}

	public void setUpdateDate(LocalDateTime updateDate) {
		this.updateDate = updateDate;
	}

	@Override
	public int hashCode() {
		if (id == null) {
			return super.hashCode();
		}

		return 31 + id.hashCode();
	}

	@Override
	public boolean equals(Object other) {
		if (id == null) {
			// New entities are only equal if the instance if the same
			return super.equals(other);
		}

		if (this == other) {
			return true;
		}
		if (!(other instanceof AbstractEntity)) {
			return false;
		}
		return id.equals(((AbstractEntity) other).id);
	}

	@PrePersist
	public void prePersist() {
		createdDate = LocalDateTime.now();
		updateDate = createdDate;
		createdBy = getUserField();  
		modifiedBy = getUserField();  
	}

	@PreUpdate
	public void preUpdate() {
		this.updateDate = LocalDateTime.now();
		modifiedBy = getUserField();  
	}

	public void setId(UUID id) {
		this.id = id;
	}

	@JsonIgnore
	public String getUserField() {

		String userField = "";

		/* try {

			Object user = (Object) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

			if(user instanceof UserDetails) {
				userField = ((UserDetails)user).getUsername();	
			}else {
				userField = (String) user;
			}
		}catch (Exception e) {
			e.getMessage();
		} */

		return userField;

	}
}
